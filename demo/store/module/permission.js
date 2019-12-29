import asyncRoutes from '@/router/asyncRoutes'
import constantRoutes from '@/router/constantRoutes'
import menu from '@/layout/home/menu'
import { cloneDeep }  from 'lodash'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

function hasMenuPermission(roles, menu) {
  if (menu.roles && menu.roles.length ) {
    return roles.some(role => menu.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

export function filterMenu(menu, roles) {
  const res = []
  menu.forEach(element => {
    const tmp = { ...element }
    if (hasMenuPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: [],
  isAddRoute: false,
  menu: cloneDeep(menu)
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_IS_ADD_ROUTE: (state, isAddRoute) => {
    state.isAddRoute = isAddRoute
  },
  SET_MENU: (state, menu) => {
    state.menu = menu
  }
}

const actions = {
  generateRoutes ({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_IS_ADD_ROUTE', true)
      commit('SET_ROUTES', accessedRoutes)
      commit('SET_MENU', filterMenu(menu, roles))
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
