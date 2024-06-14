<template>
  <div>
    <Header />
    <div class="layout">
      <Sidebar />
      <main></main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
  },
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
