<template>
  <div>
    <Header />
    <div class="layout">
      <Sidebar />
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
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
