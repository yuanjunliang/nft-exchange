import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/market/ProjectDetail.vue'),
      },
      {
        path: '/createnft',
        name: 'createnft',
        component: () => import('../views/market/CreateNFT.vue'),
      },
      {
        path: '/createnftcategory',
        name: 'createnftcategory',
        component: () => import('../views/market/CreateNFTCategory.vue'),
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
