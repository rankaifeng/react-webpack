import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Home from './page/Home';
import Login from './page/Login';

const App = props => {


    const loginStatus = useSelector(state => state.loginStatus)

    return <div>
        <Switch>
            {loginStatus ? (
                <>
                    <Route path="/home" component={Home} />
                    <Redirect to="/home" />
                </>
            ) : (
                    <>
                        <Route path="/login" component={Login} />
                        <Redirect to="/login" />
                    </>
                )}
        </Switch>
    </div>
}
export default App