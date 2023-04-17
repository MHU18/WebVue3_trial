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
      path: "/sample-graphql",
      name: "Sample GraphQL",
      component: () => import("@/views/sample-graphql.vue"),
    },
  ],
});

export default router;
