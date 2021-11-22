import React from "react";
import { Menu, Modal, Layout, Avatar, Dropdown } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./index.less";
import avatar from '../../img/avat.jpg'
import { connect } from "react-redux";
import { loginOut } from '../../redux/actions'
import Breadcrumb from '../../components/BreadCrumb'
const { Header } = Layout;

const LayoutHeader = props => {
  const { loginOut } = props
  const handleLogout = (token) => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        loginOut();
      },
    });
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="home">
        <Link to="/home">首页</Link>
      </Menu.Item>
      <Menu.Item key="project">
        <a
          target="_blank"
          href="https://github.com/rankaifeng/react-webpack"
          rel="noopener noreferrer">
          项目地址
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">退出</Menu.Item>
    </Menu>
  );

  return <Header>
    {/* <Hamburger />
        <BreadCrumb /> */}
    <Breadcrumb />
    <div className="right-menu">
      <div className="dropdown-wrap">
        <Dropdown overlay={menu}>
          <Avatar shape="circle" size="large" src={avatar} />
        </Dropdown>
        <span className="login_name">admin</span>
      </div>
    </div>
  </Header>
};
export default connect(null, { loginOut })(withRouter(LayoutHeader));
