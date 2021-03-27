import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

const service = axios.create({
  baseURL: process.env.VUE_APP_WEB_ROOT_API,
  timeout: 200000
})

function reqSuccess(config) {
  config.baseURL = process.env.VUE_APP_WEB_ROOT_API
  config.withCredentials = true
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.headers['token'] = localStorage.getItem('token') || ''
  config.headers.post['Content-Type'] = 'application/json'
  config.withCredentials = false
  return config
}

function reqFail(error) {
  Promise.reject(error)
}

function resSuccess(response) {
  if (typeof response.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(response)
  }
  if (response.data.resultCode != 200) {
    if (response.data.message) Toast.fail(response.data.message)
    if (response.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(response.data)
  }

  return response.data
}

function resFail(error) {
  return Promise.reject(error)
}

service.interceptors.request.use(reqSuccess, reqFail)
service.interceptors.response.use(resSuccess, resFail)

export default service
