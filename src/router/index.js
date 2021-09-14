import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'helloWorld',
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloWorld.vue')
  },
  {
    path: '/composition-api',
    name: 'CompositionAPI',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
