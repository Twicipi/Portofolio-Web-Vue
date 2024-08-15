import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/MainView.vue'
import AboutSection from '@/components/pages/AboutSection.vue'
import ProjectSection from '@/components/pages/ProjectSection.vue'
import ContactSection from '@/components/pages/ContactSection.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutSection
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: ProjectSection
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactSection
    }
  ]
})
export default router