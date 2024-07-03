import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/layouts/AppLayout'),
      beforeEnter: (to, from) => {
        console.log('beforeEnter', to, from)
      }
    },
  ]
})

export default router
