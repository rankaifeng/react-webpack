import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { userLogin } from '../api/AllApi'
const Login = props => {
    const dispatch = useDispatch();
    return <Button type="primary"
        onClick={() => {
            userLogin({
                name:'admin',
                password:'123123'
            }).then(res=>{
                console.log(res);
            })
            // dispatch({ data: true, type: 'LOGIN_STATUS' })
        }}>登录</Button>
}
export default Login