<template>
  <div id="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script setup>
import Layout from './Layout.vue';
import { RouterView } from 'vue-router';
</script>

<style>
nav {
  padding: 1em;
}

nav a {
  margin: 0 1em;
}
</style>
