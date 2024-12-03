import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Doctors.vue"),
  },
  {
    path: "/doctors",
    name: "Doctors",
    component: () => import("../pages/Doctors.vue"),
  },
  {
    path: "/nurses",
    name: "Nurses",
    component: () => import("../pages/Nurses.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

export default routes;
