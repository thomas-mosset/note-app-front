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
    component: () => import(/* webpackChunkName: "my-account" */ '../views/myAccountView.vue'),
  },
  {
    path: '/my-notes',
    name: 'my-notes',
    component: () => import(/* webpackChunkName: "my-notes" */ '../views/myNotesView.vue'),
  },
  {
    path: '/add-a-note',
    name: 'add-a-note',
    component: () => import(/* webpackChunkName: "add-a-note" */ '../views/AddANoteView.vue'),
  },
  {
    path: '/my-account/my-informations',
    name: 'my-informations',
    component: () => import(/* webpackChunkName: "my-informations" */ '../views/myInformationsView.vue'),
  },
  {
    path: '/profile-successfully-deleted',
    name: 'profile-successfully-deleted',
    component: () => import(/* webpackChunkName: "profile-successfully-deleted" */ '../views/profileDeletedView.vue'),
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
