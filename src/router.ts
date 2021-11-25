import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("~/views/Homepage.vue"),
    meta: {
      title: "Geoxor | Home",
    },
  },
  {
    path: "/downloads",
    name: "downloads",
    component: () => import("~/views/Downloads.vue"),
    meta: {
      title: "Geoxor | Downloads",
    },
  },
  {
    path: "/minecraft",
    name: "minecraft",
    component: () => import("~/views/Minecraft.vue"),
    meta: {
      title: "Geoxor | Minecraft Server",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;