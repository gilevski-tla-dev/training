import Home from "../views/Home.vue";
import Exercise1 from "../views/Exercise1.vue";
import { createRouter, createWebHistory } from "vue-router";
import appLayout from "@/layouts/appLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { layouts: appLayout },
  },
  {
    path: "/exercise1",
    name: "Exercise1",
    component: Exercise1,
    meta: { layouts: appLayout },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
