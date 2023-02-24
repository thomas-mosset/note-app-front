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
    path: '/logout',
    name: 'logout',
    redirect: { name: 'login' }, // redirect to the login page
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupView.vue')
  },
  {
    path: '/my-account',
    name: 'my-account',
    component: () => import(/* webpackChunkName: "my-account" */ '../views/myAccountView.vue')
  },
  { path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "my-account" */ '../views/NotFoundView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
