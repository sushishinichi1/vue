import YoyakuView from "@/views/YoyakuView.vue";
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about/:id",
      name: "about",
      component: AboutView,
    },
    {
      path: "/yoyaku",
      name: "yoyaku",
      component: YoyakuView,
    },
  ],
});

export default router;
