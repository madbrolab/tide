<script setup>
import {ref,onBeforeUnmount} from 'vue';
const props=defineProps({plugin:Object,api:Function,surface:Object});
const busy=ref(false),timezone=ref(''),error=ref(''),details=ref(false);
let request;
async function load(){
  if(busy.value)return;busy.value=true;error.value='';
  request=new AbortController();
  try{const result=await props.api('invoke','POST',{version:1,target:props.plugin.id,operation:'status',args:{}},{},request.signal);timezone.value=result.data.timezone}
  catch(e){if(!request.signal.aborted)error.value=e.message}
  finally{busy.value=false}
}
onBeforeUnmount(()=>request?.abort());
</script>
<template>
  <section class="example-card" :aria-busy="busy"><h2>{{plugin.name}}</h2>
    <p>这里使用插件自己的布局和样式，沿用宿主主题。</p>
    <el-button type="primary" :loading="busy" @click="load">读取时区</el-button>
    <el-button @click="details=true">打开弹窗</el-button>
    <p v-if="timezone" role="status">{{timezone}}</p><p v-if="error" role="alert">{{error}}</p>
  </section>
  <el-dialog v-model="details" :append-to="surface.overlay" title="插件弹窗" width="min(480px,92vw)"><p class="example-note">弹窗也保留在本插件的样式边界内。</p></el-dialog>
</template>
