import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

const getToken = () => window.localStorage.getItem('token')
const whiteList = ['/login', '/about'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.state.permission.isAddRoute) return next()
      let routes = await store.dispatch('permission/generateRoutes', store.state.user.roles)
      router.addRoutes(routes)
      next({ ...to, replace: true })
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
