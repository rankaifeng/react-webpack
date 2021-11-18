import { LOGIN_STATUS } from '../constant';

const loginStatus = (preState = false, action) => {
    const { type, data } = action
    switch (type) {
        case LOGIN_STATUS:
            return data;
        default:
            return preState;
    }
}
export default loginStatus