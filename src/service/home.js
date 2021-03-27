import service from '@/utils/service'

export function getHome() {
  return service.get('/index-infos')
}
