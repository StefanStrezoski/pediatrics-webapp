import { createRouter, createWebHistory } from 'vue-router'
import UnderConstruction from "@/views/UnderConstruction.vue";
import AboutPage from "@/views/AboutPage.vue";
import SymposiumPage from "@/views/SymposiumPage.vue";
import AbstractPage from "@/views/AbstractPage.vue";
import FeePage from "@/views/FeePage.vue";
import HotelPage from "@/views/HotelPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/symposium',
      name: 'SymposiumPage',
      component: SymposiumPage
    },
    {
      path: '/abstracts',
      name: 'AbstractPage',
      component: AbstractPage
    },
    {
      path: '/registration',
      name: 'RegistrationPage',
      component: FeePage
    },
    {
      path: '/accommodations',
      name: 'HotelPage',
      component: HotelPage
    }
  ],
})

export default router
