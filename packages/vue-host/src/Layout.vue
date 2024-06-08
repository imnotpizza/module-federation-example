<template>
  <ReactButton/>
</template>

<script setup>
import { ref, defineComponent } from 'vue';
import ReactButton from './ReactButton';

defineComponent({
  name: 'Layout',
  components: {
    ReactButton,
   },
  });
</script>

<style></style>
