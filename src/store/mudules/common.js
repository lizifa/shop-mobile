import { getCart } from '@/apis/cart'
export const common = {
  namespaced: true,
  state: {
    cartCount: 0
  },
  mutations: {
    addCart(state, payload) {
      state.cartCount = payload.count
    }
  },
  actions: {
    async updateCart(ctx) {
      const { data } = await getCart()
      ctx.commit('addCart', {
        count: data.length || 0
      })
    }
  }
}
