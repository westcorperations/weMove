import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import HomeLayout from '@/components/UserLayout/HomeLayout.vue'
import AuthLayout from '@/components/UserLayout/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/',
      name: 'HomeLayout',
      component: HomeLayout,
      children:[
        {
        path: '/',
        name:'HomeView',
        component:HomeView
      },
      {
      path: '/booking',
      name: 'BookingView',
      component: () => import('@/views/BookingView.vue')
    }
    
  ],
},
    {
      path: '/login',
      redirect: '/login',
      name: 'AuthLayout',
      component: AuthLayout,
      children:[
        {
        path: '/login',
        name:'LoginView',
        component:LoginView
      },

    
  ],
},
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
