import { OTHER } from '../constant';

const otherRequest = (preState = {}, action) => {
    const { type, data } = action
    switch (type) {
        case OTHER:
            console.log(data);
            return data;
        default:
            return preState;
    }
}
export default otherRequest