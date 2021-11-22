import { userLogin } from '../../api/AllApi'
import {
  LOGIN_STATUS,
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
 * 设置token
 * @param {*} token 
 */
export const setToken = token => {
  return {
    type: LOGIN_STATUS,
    token,
  };
};
