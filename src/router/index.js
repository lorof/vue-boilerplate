import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const loadView = view => () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    }
  ]
})