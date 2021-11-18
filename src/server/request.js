import instance from './axios'
import { BASE_URL } from './config';
const http = ({ url = '', method, params = {} }) => {
  return new Promise((resolve, reject) => {
    instance({
      method,
      url,
      // `params` 是即将与请求一起发送的 URL 参数
      // `data` 是作为请求主体被发送的数据
      params: method === 'GET' ? params : null,
      data: method === 'POST' || method === 'PUT' || method === 'DELETE' ? params : null,
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

const changeMethod = (params, url, method) => {
  return http({
    url: `${BASE_URL}/${url}`,
    method,
    params
  })
}

export const get = ({ url, params = {} }) => {
  return changeMethod(params, url, 'GET')
}
export const post = ({ url, params = {} }) => {
  return changeMethod(params, url, 'POST')
}
export const put = ({ url, params = {} }) => {
  return changeMethod(params, url, 'PUT')
}
export const del = ({ url, params }) => {
  return changeMethod(params, url, 'DELETE')
}
