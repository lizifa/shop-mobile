export const routes = [
  // {
  //   path: '/',
  //   redirect: {
  //     name: 'index'
  //   }
  // },
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/index.vue')
  }
]
