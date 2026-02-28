import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from "@/views/AboutPage.vue";
import SymposiumPage from "@/views/SymposiumPage.vue";
import AbstractPage from "@/views/AbstractPage.vue";
import FeePage from "@/views/FeePage.vue";
import HotelPage from "@/views/HotelPage.vue";
import OrganizationPage from "@/views/OrganizationPage.vue";
import ProgramPage from "@/views/ProgramPage.vue";
import WorkshopPage from "@/views/WorkshopPage.vue";
import MembershipPage from "@/views/MembershipPage.vue";

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
      path: '/program',
      name: 'ProgramPage',
      component: ProgramPage
    },
    {
      path: '/workshop',
      name: 'WorkshopPage',
      component: WorkshopPage
    },
    {
      path: '/organization',
      name: 'OrganizationPage',
      component: OrganizationPage
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
    },
    {
      path: '/membership',
      name: 'MembershipPage',
      component: MembershipPage
    }
  ],
})

export default router
