import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import acceuil from '../views/acceuil.vue'
import footer from "@/components/footer.vue"
 import header from "@/components/header.vue"
import carousel from "@/components/carousel.vue"
import read_more from "@/components/read_more.vue"
import About from "@/components/About.vue"
import Features from "@/components/Features.vue"
import Register from "@/components/Register.vue"
import Login from "@/components/Login.vue"
import Moncompte from "@/components/Moncompte.vue"
import Testimonial from '@/components/Testimonial'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
{
   path: "/",
    name: "acceuil",
    component: acceuil,
},
  {
    path: "/footer",
    name: "footer",
    component: footer,
  },
   {
    path: "/header",
    name: "header",
    component: header,
  }, 
  {
    path: "/carousel",
    name: "carousel",
    component: carousel,
  },
  {
    path: "/read_more",
    name: "read_more",
    component: read_more,
  },
   {
    path: "/About",
    name: "About",
    component: About,
  },

  {
    path: "/Features",
    name: "Features",
    component: Features,
  },
   {
    path: "/Register",
    name: "Register",
    component: Register,
  },
   {
    path: "/Login",
    name: "Login",
    component: Login,
  },
     {
    path: "/Moncompte",
    name: "Moncompte",
    component: Moncompte,
  },
     {
    path: "/Testimonial",
    name: "Testimonial",
    component: Testimonial,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
