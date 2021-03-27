import service from '@/utils/service'

export function getUserInfo() {
  return service.get('/user/info')
}

export function EditUserInfo(params) {
  return service.put('/user/info', params)
}

export function login(params) {
  return service.post('/user/login', params)
}

export function logout() {
  return service.post('/user/logout')
}

export function register(params) {
  return service.post('/user/register', params)
}
