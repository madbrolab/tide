// Development-time bundling only. The installed plugin uses the host Vue runtime.
import {build} from 'esbuild';
import {parse,compileScript} from '@vue/compiler-sfc';
import {readFile,mkdir} from 'node:fs/promises';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('.',import.meta.url)));
await mkdir('dist',{recursive:true});
await build({entryPoints:['Console.vue'],outfile:'dist/console.mjs',bundle:true,minify:true,format:'esm',target:'es2022',define:{'process.env.NODE_ENV':'"production"'},plugins:[{
  name:'vue-sfc',setup(b){
    b.onResolve({filter:/^vue$/},()=>({path:'/tide-vue.mjs',external:true}));
    b.onLoad({filter:/\.vue$/},async({path})=>{
      const {descriptor,errors}=parse(await readFile(path,'utf8'),{filename:path});
      if(errors.length)throw errors[0];
      if(descriptor.styles.length)throw Error('Put plugin styles in console.css');
      return {contents:compileScript(descriptor,{id:path,inlineTemplate:true}).content,loader:'js',resolveDir:dirname(path)};
    });
  }
}]});
