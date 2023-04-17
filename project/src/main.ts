import { createApp, h, provide } from "vue";
import PrimeVue from "primevue/config";

import App from "./app.vue";
import router from "./router";

const app = createApp({
  setup() {
  },
  render: () => h(App),
});

app.use(router);
app.use(PrimeVue);

app.mount("#app");
