<template>
  <div ref="root" class="mfed-container"></div>
  <div :isLoading="isLoading">Loading....</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated, watch, toRaw } from 'vue';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import React from 'react';


const props = defineProps({
  props: {
    type: Object,
    required: true,
  },
  loadRemoteModule: {
    type: Function,
    required: true,
  },
});

const reactRoot = ref(null); // react root
const root = ref(null);
const error = ref(); // error 저장
const remoteModule = ref(null); // entry의 react module str
const isLoading = ref(true);

const updateReactComponent = () => {
  if (!!error.value || !remoteModule.value || !root.value) return;
  
  // prod 환경에서 실행시 에러발생하여 ReactDOM.render로 사용
  if (!reactRoot.value) {
    reactRoot.value = createRoot(root.value); // bundle의 element를 넣음
  }
  // root에서 컴포넌트 초기화 진행
  reactRoot.value.render(
    React.createElement(remoteModule.value, {
      ...props.props,
    }),
  );
};

onMounted(() => {
  if (remoteModule.value) return;
  props
    .loadRemoteModule()
    .then((b) => {
      remoteModule.value = b;
      updateReactComponent();
    })
    .catch((e) => {
      console.error('Remote Module Load Error ', e);
      error.value = e;
    })
    .finally(() => {
      isLoading.value = false;
    });
});

watch(() => props.props, updateReactComponent, { deep: true, immediate: true });

onBeforeUnmount(() => {
  reactRoot.value && reactRoot.value.unmount();
  reactRoot.value = null;
});
</script>
<style scoped>
.mfed-container {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
