#!/usr/bin/env node
// Public development tool. Contains no host implementation or private key.
import { readFile, writeFile, realpath } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCipheriv, createHash, publicEncrypt, randomBytes, constants } from 'node:crypto';
import { deflateRawSync } from 'node:zlib';
import { build } from 'esbuild';

const limit=256*1024, format='tide.encrypted/1';
const sha=data=>'sha256:'+createHash('sha256').update(data).digest('hex');
const json=value=>Buffer.from(JSON.stringify(value));
function crc32(data){let c=0xffffffff;for(const b of data){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return (c^0xffffffff)>>>0}
function zip(files){
  const parts=[],directory=[];let offset=0;
  for(const [name,raw] of Object.entries(files).sort(([a],[b])=>a<b?-1:a>b?1:0)){
    const n=Buffer.from(name),data=deflateRawSync(raw),crc=crc32(raw),local=Buffer.alloc(30),central=Buffer.alloc(46);
    local.writeUInt32LE(0x04034b50);local.writeUInt16LE(20,4);local.writeUInt16LE(8,8);local.writeUInt32LE(crc,14);local.writeUInt32LE(data.length,18);local.writeUInt32LE(raw.length,22);local.writeUInt16LE(n.length,26);
    central.writeUInt32LE(0x02014b50);central.writeUInt16LE(20,4);central.writeUInt16LE(20,6);central.writeUInt16LE(8,10);central.writeUInt32LE(crc,16);central.writeUInt32LE(data.length,20);central.writeUInt32LE(raw.length,24);central.writeUInt16LE(n.length,28);central.writeUInt32LE(offset,42);
    parts.push(local,n,data);directory.push(central,n);offset+=local.length+n.length+data.length;
  }
  const dir=Buffer.concat(directory),end=Buffer.alloc(22),count=Object.keys(files).length;
  end.writeUInt32LE(0x06054b50);end.writeUInt16LE(count,8);end.writeUInt16LE(count,10);end.writeUInt32LE(dir.length,12);end.writeUInt32LE(offset,16);
  return Buffer.concat([...parts,dir,end]);
}

export async function pack(pluginDir,output){
  const dir=await realpath(pluginDir),files={};
  for(const name of ['manifest.json','operations.json','icon.png','ui.json','migrations.json','NOTICE.txt']){
    try{files[name]=await readFile(join(dir,name))}catch(e){if(e.code!=='ENOENT'||['manifest.json','operations.json','icon.png'].includes(name))throw e}
  }
  const manifest=JSON.parse(files['manifest.json']),ops=JSON.parse(files['operations.json']);
  if(manifest.sdk!==2)throw Error('manifest.sdk 必须为 2');
  if(!/^com(?:\.[a-z][a-z0-9]*){2,}$/.test(manifest.id)||manifest.id.length>160)throw Error('需要有效的插件包 ID');
  if(!/^\d+\.\d+\.\d+$/.test(manifest.version))throw Error('需要三段版本号');
  if(manifest.console)throw Error('第三方界面使用 ui.json');
  const groups=new Map(),actions=Object.entries(manifest.actions??{});
  if(!actions.length||actions.length>1024)throw Error('动作数量应为 1–1024');
  for(const [name,action] of actions){
    if(!ops[name]?.input||!ops[name]?.output||!ops[name]?.example)throw Error('动作缺少契约或示例：'+name);
    const group=action.entry??'main';if(!/^[a-z][a-z0-9-]{0,47}$/.test(group))throw Error('分片名无效：'+group);
    if(!groups.has(group))groups.set(group,[]);groups.get(group).push(name);
  }
  if(groups.size>64)throw Error('分片数量不能超过 64');
  const source=await readFile(join(dir,'main.js'),'utf8'),units={};
  for(const [group,names] of groups){
    const result=await build({stdin:{contents:'export {'+names.sort().map(JSON.stringify).join(',')+'} from "tide:source"'},bundle:true,write:false,format:'esm',target:'es2022',treeShaking:true,minify:true,logLevel:'silent',plugins:[{name:'tide-input',setup(b){
      b.onResolve({filter:/.*/},args=>{if(args.path!=='tide:source'||args.importer!=='<stdin>')throw Error('请先将第三方依赖打入 main.js');return {path:'source',namespace:'tide'}});
      b.onLoad({filter:/.*/,namespace:'tide'},()=>({contents:source,loader:'js'}));
    }}]});
    const data=Buffer.from(result.outputFiles[0].contents);if(data.length>limit)throw Error(group+' 分片超过 256 KiB');
    files['unit-'+group+'.js']=data;units[group]={size:data.length,digest:sha(data)};
  }
  const entries={};let expanded=0;
  for(const [name,data] of Object.entries(files)){
    const max=name==='operations.json'?4*1024*1024:name==='icon.png'?128*1024:limit;
    if(!data.length||data.length>max)throw Error(name+' 超过格式限制');expanded+=data.length;
    entries[name]={size:data.length,digest:sha(data)};
  }
  files['release.json']=json({units,format,publisher:'',module:manifest.id,version:manifest.version,sdkMajor:2,entry:'encrypted-source-shards',files:entries});
  if(files['release.json'].length>32768||expanded+files['release.json'].length>5*1024*1024)throw Error('包内容超过格式限制');
  const plain=zip(files);if(plain.length>1024*1024)throw Error('压缩后的包超过 1 MiB');
  const key=randomBytes(32),nonce=randomBytes(12),publicKey=await readFile(new URL('./recipient-public.pem',import.meta.url));
  const wrapped=publicEncrypt({key:publicKey,padding:constants.RSA_PKCS1_OAEP_PADDING,oaepHash:'sha256',oaepLabel:Buffer.from(format)},key);
  const header=json({format,algorithm:'RSA-OAEP-SHA256+A256GCM',key:wrapped.toString('base64')});
  const cipher=createCipheriv('aes-256-gcm',key,nonce);cipher.setAAD(header);
  const encrypted=Buffer.concat([nonce,cipher.update(plain),cipher.final(),cipher.getAuthTag()]);
  const archive=zip({'package.json':header,'payload.enc':encrypted});if(archive.length>1024*1024)throw Error('插件包超过 1 MiB');
  await writeFile(output,archive,{flag:'wx'});
  return {file:basename(output),bytes:archive.length,sha256:sha(archive).slice(7),actions:actions.length,groups:groups.size};
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  try{
    const args=process.argv.slice(2),dir=args[args.indexOf('--dir')+1],out=args[args.indexOf('--out')+1];
    if(!args.includes('--dir')||!args.includes('--out')||!dir||!out)throw Error('用法：node pack.mjs --dir 插件目录 --out 插件.zip');
    console.log(JSON.stringify(await pack(resolve(dir),resolve(out)),null,2));
  }catch(e){console.error(e.message);process.exitCode=1}
}
