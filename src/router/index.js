import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/helloworld',
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
  },
  {
    path: '/vuextest',
    name: 'vuexTest',
    component: () => import(/* webpackChunkName: "about" */'../views/VuexTest.vue' )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 特性：动态路由
router.addRoute({
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
})

router.addRoute('about', {
  path: '/about/info',
  component: {
    render() {
      return h('div', '我是about页面子路由')
    }
  }
})

export default router
