import { createStore } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import { user } from './mudules/user'
import { common } from './mudules/common'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
    user,
    common
  }
})
