import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre-mi',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/trabajos',
      name: 'works',
      component: () => import('../views/WorksView.vue')
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
