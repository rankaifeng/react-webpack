/**
 * 请求路径
 */
export const BASE_URL = process.env.NODE_ENV === 'development' ?
  'http://192.168.100.120:8088/' : "http://192.168.100.120:8088/";
/**
 * 超时时间
 */
export const TIMEOUT = 30000;