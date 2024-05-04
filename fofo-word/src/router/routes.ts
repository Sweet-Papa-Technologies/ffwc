import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue'), name: 'index' }],
  },
  {
    path: '/main-menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainMenu.vue'), name: 'main-menu' }],
  },

  {
    path: "/game",
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainGame.vue'), name: 'game' }],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
