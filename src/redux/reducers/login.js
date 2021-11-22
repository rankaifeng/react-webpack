import { LOGIN_STATUS, LOGIN_OUT } from '../constant';
const initUserInfo = {
    token: sessionStorage.getItem('token'),
};
const loginStatus = (state = initUserInfo, action) => {
    const { type, token } = action
    switch (type) {
        case LOGIN_STATUS:
            return { ...state, token };
        case LOGIN_OUT:
            return {};
        default:
            return state;
    }
}
export default loginStatus