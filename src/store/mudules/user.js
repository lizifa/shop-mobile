export const user = {
  namespaced: true,
  state: {},
  mutations: {
    todoAction(state, msg) {
      console.log(state, msg, 'kkkkkkkkkkkkkk')
    }
  },
  actions: {
    todoAction(store, msg) {
      console.log(store, msg, 'kkkkkkkkkkkkkk')
    }
  }
}
