<template>
  <aside>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
aside {
  background-color: #f4f4f4;
  padding: 1rem;
  width: 200px;
  height: 100vh;
  position: fixed;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
}
</style>
