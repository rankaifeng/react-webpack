import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import routeList from "../../config/routeMap";
const { Content } = Layout;
const LayoutContent = (props) => {
  return (<Content style={{ height: "100%" }}>
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
  );
};

export default LayoutContent;
