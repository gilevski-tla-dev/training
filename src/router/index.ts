import Home from "../views/Home.vue";
import Exercise1 from "../views/Exercise1.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/exercise1",
    name: "Exercise1",
    component: Exercise1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
