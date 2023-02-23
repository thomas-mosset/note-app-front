import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/SigninView.vue')
  },
  {
    path: '/my-account',
    name: 'my-account',
    component: () => import(/* webpackChunkName: "my-account" */ '../views/myAccountView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
