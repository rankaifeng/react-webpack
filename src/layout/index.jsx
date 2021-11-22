import React from "react";
import Content from "./Content";
import { Layout } from "antd";
import Siderbar from './Sidebar'
import Header from "./Header";
const Main = (props) => {

  const style = {
    display: 'flex'
  }

  const cont = {
    background: 'white',
    padding: '20px',
    width: '100%',
    height: '100%'
  }
  return (
    <Layout>
      <div style={style}>
        {/* 侧边栏 */}
        <Siderbar />
        {/* 右边内容区域 */}
        <Layout>
          {/* 头部导航 */}
          <Header />
          {/* 显示内容区 */}
          <div style={cont}>
            <Content />
          </div>

        </Layout>
      </div>
    </Layout>
  );
};
export default Main;
