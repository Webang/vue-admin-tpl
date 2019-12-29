import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './constantRoutes'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
