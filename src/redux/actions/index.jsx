import {
    LOGIN_STATUS,
} from '../constant';

// 获得登录状态
export const getLoginStatus = data => ({
    type: LOGIN_STATUS,
    data,
});