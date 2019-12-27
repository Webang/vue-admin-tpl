const state = {
  userInfo: null,
  token: '',
  roles: []
}

const localToken = window.localStorage.getItem('token')
const localUserInfo = window.localStorage.getItem('userInfo')
if (localToken) state.token = localToken
if (localUserInfo) state.userInfo = JSON.parse(localUserInfo)

const roles = ['admin']
const token = '18644446666'
const userInfo = { username: 'Gaollard' }

const mutations = {
  SET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  SET_TOKEN (state, token) {
    state.token = token
    window.localStorage.setItem('token', token)
  }
}

const actions = {
  // 用户登录
  login ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_USERINFO', userInfo)
        commit('SET_TOKEN', token)
        commit('SET_RI')
        resolve()
      }, 1000)
    })
  },
  // 获取用户信息
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_USERINFO', userInfo)
        commit('SET_ROLES', roles)
        resolve()
      }, 1000)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
