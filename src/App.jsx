import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Login from './page/Login';
import Layout from './layout'
import { connect } from 'react-redux';
const App = props => {
    const { token } = props;
    return <HashRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route
                path="/"
                render={() => {
                    if (!token) {
                        return <Redirect to="/login" />;
                    } else {
                        return <Layout />;
                    }
                }}
            />
        </Switch>
    </HashRouter>
}
export default connect(state => state.loginStatus, {})(App);