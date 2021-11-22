import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd'
import { login } from '../redux/actions'
const Login = props => {
    const { token, login } = props;
    //获取登录状态
    if (token) { return <Redirect to="/home" /> }

    return <Button type="primary"
        onClick={() => {
            login({
                name: 'admin',
                password: '123123'
            })
        }}>登录</Button>
}
export default connect(
    state => state.loginStatus,
    { login })
    (Login);
