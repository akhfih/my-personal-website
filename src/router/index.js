import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const ViewProject = () => import("@/views/ViewProject.vue");
const LayoutDefault = defineAsyncComponent(() =>
  import("@/layouts/LayoutDefault.vue")
);

const routes = [
  {
    name: "project",
    path: "/",
    component: ViewProject,
    meta: {
      layout: LayoutDefault,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
