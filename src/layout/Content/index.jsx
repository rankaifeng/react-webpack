import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import routeList from "../../config/routeMap";
const { Content } = Layout;
const LayoutContent = (props) => {
  return (
    <div>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {routeList.map((route) => {
            return (
              <Route
                component={route.component}
                key={route.path}
                path={route.path} />
            );
          })}
        </Switch>
      </Content>
    </div>
  );
};

export default LayoutContent;
