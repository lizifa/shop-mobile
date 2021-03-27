import service from '@/utils/service'

export function addCart(params) {
  return service.post('/shop-cart', params)
}

export function modifyCart(params) {
  return service.put('/shop-cart', params)
}

export function getCart(params) {
  return service.get('/shop-cart', { params })
}

export function deleteCartItem(id) {
  return service.delete(`/shop-cart/${id}`)
}

export function getByCartItemIds(params) {
  return service.get('/shop-cart/settle', { params })
}
