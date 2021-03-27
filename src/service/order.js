import service from '@/utils/service'

export function createOrder(params) {
  return service.post('/saveOrder', params)
}

export function getOrderList(params) {
  return service.get('/order', { params })
}

export function getOrderDetail(id) {
  return service.get(`/order/${id}`)
}

export function cancelOrder(id) {
  return service.put(`/order/${id}/cancel`)
}

export function confirmOrder(id) {
  return service.put(`/order/${id}/finish`)
}

export function payOrder(params) {
  return service.get('/paySuccess', { params })
}
