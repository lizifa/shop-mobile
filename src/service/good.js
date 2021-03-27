import service from '@/utils/service'

export function getDetail(id) {
  return service.get(`/goods/detail/${id}`)
}

export function getCategory() {
  return service.get('/categories')
}

export function search(params) {
  return service.get('/search', { params })
}
