import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";

import LoginView from "@/views/auth/LoginView.vue";
import HomeLayout from "@/components/UserLayout/HomeLayout.vue";
import AuthLayout from "@/components/UserLayout/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/",
      name: "HomeLayout",
      component: HomeLayout,
      children: [
        {
          path: "/",
          name: "HomeView",
          component: HomeView,
        },
        {
          path: "/booking",
          name: "BookingView",
          component: BookingView,
        },
      ]
    },
    {
      path: '/auth/:provider/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    },
    {
      path: "/auth",
      redirect: "/login",
      name: "AuthLayout",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "LoginView",
          component: LoginView,
        },
      ]
    },
    
  ],
  // base: process.env.BASE_URL,
});

export default router;
