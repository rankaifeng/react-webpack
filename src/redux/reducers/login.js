import { LOGIN_STATUS } from '../constant';
const initUserInfo = {
    token: sessionStorage.getItem('token'),
};
const loginStatus = (state = initUserInfo, action) => {
    const { type, token } = action
    switch (type) {
        case LOGIN_STATUS:
            return { ...state, token };
        default:
            return state;
    }
}
export default loginStatus