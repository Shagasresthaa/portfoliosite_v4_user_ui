import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import BlogPage from "../views/BlogPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
