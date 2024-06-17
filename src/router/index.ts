import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: { title: "About" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
    meta: { title: "Projects" },
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
    meta: { title: "Blog" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    meta: { title: "Contact" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
