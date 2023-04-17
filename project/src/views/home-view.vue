<script setup lang="ts"></script>

<template>
  <div class="home">
    <HelloWorld msg="AEMO Web Application" />
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
