import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import permission from './module/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission
  }
})

export default store
