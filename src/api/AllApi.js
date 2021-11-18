
import { post } from '../server/request'

/**
 * 登陆
 * @param params
 */
export const userLogin = params => {
    let newParam = {
        ...params,
        source: 'screen'
    }
    return post({ url: 'authenticate', params: { ...newParam } });
}