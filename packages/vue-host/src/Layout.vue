<template>
  <div>
    <Header />
    <div class="layout">
      <Sidebar />
      <main>
        <RemoteModuleLoader :props="{}" :loadRemoteModule="loadRemoteModule" />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import RemoteModuleLoader from './components/RemoteModuleLoader.vue';

const loadRemoteModule = async () => {
  const res = (await import('remote/RemotePage')).default;
  return res;
};
</script>

<style scoped>
.layout {
  display: flex;
  margin-top: 60px;
}
main {
  margin-left: 220px;
  padding: 20px;
  width: calc(100% - 220px);
}
</style>
