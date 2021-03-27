import service from '@/utils/service'

export function addAddress(params) {
  return service.post('/address', params)
}

export function EditAddress(params) {
  return service.put('/address', params)
}

export function DeleteAddress(id) {
  return service.delete(`/address/${id}`)
}

export function getDefaultAddress() {
  return service.get('/address/default')
}

export function getAddressList() {
  return service.get('/address', { pageNumber: 1, pageSize: 1000 })
}

export function getAddressDetail(id) {
  return service.get(`/address/${id}`)
}
