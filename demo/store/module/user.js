const state = {
  userInfo: null,
  token: '',
  roles: []
}

let localRole = window.localStorage.getItem('role')
let localToken = window.localStorage.getItem('token')
let localUserInfo = window.localStorage.getItem('userInfo')

if (localToken) state.token = localToken
if (localUserInfo) state.userInfo = JSON.parse(localUserInfo)
if (localRole) state.roles = [localRole]

const mutations = {
  SET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  SET_TOKEN (state, token) {
    state.token = token
    window.localStorage.setItem('token', token)
  },
  SET_ROLES (state, roles) {
    state.roles = roles
    window.localStorage.setItem('role', roles[0])
  }
}

const actions = {
  // 用户登录
  login ({ commit }, userForm) {
    let userInfo = { username: 'Gaollard' }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_USERINFO', userInfo)
        commit('SET_TOKEN', '18644446666')
        commit('SET_ROLES', [userForm.role])
        resolve()
      }, 500)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
