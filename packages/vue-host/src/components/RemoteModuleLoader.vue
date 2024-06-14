<!--
  * @file: InventoryReqListTab.vue
  * @author: liam / liam@o2pluss.com
  * @description: coconut-modules module federation 연동용 컴포넌트
 -->
<template>
  <!-- 에러 발생시 -->
  <div v-if="error" class="mfed-container">
    <slot name="error" />
  </div>
  <!-- 로딩 중 -->
  <div v-else-if="isLoading" class="mfed-container">
    <slot name="loading" />
  </div>
  <div ref="root" class="mfed-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUpdated, watch, toRaw } from 'vue';
import { Container, Root, createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import React from 'react';
import { useStore } from 'vuex';

const store = useStore();
const userInfo = ref(store.getters['auth/getUserInfo']);

/**
 * React Remote Module props
 * @param props: remote 컴포넌트로 전달할 props
 * @param loadRemoteModule: module load 함수
 */
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

const reactRoot = ref<Root | null>(null); // react root
const root = ref<Container | null>(null);
const error = ref<Error>(); // error 저장
const remoteModule = ref<Root | null>(null); // entry의 react module str
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
    .then((b: any) => {
      remoteModule.value = b;
      updateReactComponent();
    })
    .catch((e: Error) => {
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
