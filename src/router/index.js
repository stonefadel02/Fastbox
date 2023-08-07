import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import acceuil from "../views/acceuil.vue";
import footer from "@/components/footer.vue";
import header from "@/components/header.vue";
import carousel from "@/components/carousel.vue";
import shipping_option from "@/components/shipping_option.vue";
import About from "@/components/about.vue";
import features from "@/components/features.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Moncompte from "@/components/Moncompte.vue";
import Testimonial from "@/components/Testimonial";
import head from "@/components/head";
import mon_comptes from "@/components/mon_comptes";
import NoAuthLayout from "../layout/NoAuthLayout.vue";

const routes = [
  {
    path: "/",
    name: "acceuil",
    component: acceuil,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/footer",
    name: "footer",
    component: footer,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/header",
    name: "header",
    component: header,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/carousel",
    name: "carousel",
    component: carousel,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/shipping_option",
    name: "shipping_option",
    component: shipping_option,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { layout: NoAuthLayout, public: true },
  },

  {
    path: "/features",
    name: "features",
    component: features,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/Moncompte",
    name: "Moncompte",
    component: Moncompte,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/Testimonial",
    name: "Testimonial",
    component: Testimonial,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/head",
    name: "head",
    component: head,
    meta: { layout: NoAuthLayout, public: true },
  },
  {
    path: "/mon_comptes",
    name: "mon_comptes",
    component: mon_comptes,
    meta: { layout: NoAuthLayout, public: true }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
