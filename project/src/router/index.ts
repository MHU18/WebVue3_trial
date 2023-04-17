import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/sample-page",
      name: "Sample Page",
      component: () => import("@/views/sample-page.vue"),
    },
  ],
});

export default router;
