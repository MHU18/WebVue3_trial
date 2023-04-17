<script setup lang="ts">
import { RouterView } from "vue-router";
import DevPanel from '@/components/dev-panel.vue'
</script>

<template>
  <DevPanel />
  <RouterView />
  <p>Web Application Trial</p>
</template>

<style lang="scss">
//@use '@/assets/theme.css';
@use "@/assets/base.scss";
@use 'primevue/resources/primevue.min.css';
@use 'primeicons/primeicons.css';

#app {
  margin: 0 auto;
  font-weight: normal;
  padding: 8px;
}
#help-button {
  display: block;
  position: fixed;
  top: 270px;
  right: 2px;
  overflow: hidden;
  cursor: pointer;
  z-index: 99;
}
</style>
