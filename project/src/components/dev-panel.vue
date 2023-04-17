<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Sidebar from 'primevue/sidebar';

// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV === 'development' || false;
const router = useRouter();
const routes = router ? router.getRoutes() : [];
const menuItems = [];

for (const route of routes) {
  menuItems.push({
    label: route.name,
    icon: 'pi pi-link',
    command: () => {
      router.push(route.path);
      visibleRight.value = false;
    }
  });
}

const visibleRight = ref(false);
const menu = ref([
  {
    label: 'Application Routes',
    items: menuItems
  }
]);

const message = "This panel is only visible during development, delete <DevPanel /> from app.vue to remove permanently.";
</script>

<template>
  <template v-if="dev">
    <div id="help-button">
      <Button icon="pi pi-chevron-left" @click="() => visibleRight = true" />
    </div>
    <Sidebar v-model:visible="visibleRight" position="right">
      <Menu :style="{ width: '100%', border: 'none' }" :model="menu" />
      <Message severity="info" :closable="false">
        {{ message }}
      </Message>
      <Card>
        <template #title>
          Documentation
        </template>
        <template #content>
          <p>
            Vue’s <a target="_blank" href="https://vuejs.org/">official documentation</a> provides you with all
            information you need to get started with Vue.
          </p> <br />
          <p>
            PrimeVue’s <a target="_blank" href="https://www.primefaces.org/primevue/">official documentation</a>
            provides
            you with all information you need to get started with PrimeVue.
          </p>
        </template>
      </Card>
    </Sidebar>
  </template>
</template>

<style>
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
