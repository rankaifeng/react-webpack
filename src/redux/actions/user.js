import { userLogin } from '../../api/AllApi'
import {
  LOGIN_STATUS,
  LOGIN_OUT
} from '../constant';
/**
 * 用户登录
 * @param {*} data 
 */
export const login = data => dispatch => {
  userLogin(data)
    .then(res => {
      const { auth_token } = res;
      dispatch(setToken(auth_token));
      sessionStorage.setItem('token', auth_token)
    })
};

/**
 * 退出登录
 */
export const loginOut = () => dispatch => {
  sessionStorage.removeItem('token')
  dispatch(clearToken())
}
/**
 * 设置token
 * @param {*} token 
 */
export const setToken = token => {
  return {
    type: LOGIN_STATUS,
    token,
  };
};
/**
 * 清空token
 */
export const clearToken = () => {
  return {
    type: LOGIN_OUT,
  }
}
