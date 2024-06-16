<template>
  <div>
    <h1>Remote Page</h1>
    <RemoteModuleLoader :props="{}" :loadRemoteModule="loadRemoteModule" />
  </div>
</template>

<script setup>
import RemoteModuleLoader from './RemoteModuleLoader.vue';

const loadRemoteModule = async () => {
  const res = (await import('remote/RemotePage')).default;
  return res;
};
</script>
