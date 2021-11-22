import React from 'react'
import { Menu } from "antd"
import { NavLink, withRouter } from "react-router-dom";
import menuList from '../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
const Sidebar = props => {
    const path = props.location.pathname;
    // 菜单渲染
    const getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return <Menu.Item key={item.path}>
                    <NavLink to={item.path}>
                        <span>{item.title}</span>
                    </NavLink>
                </Menu.Item>
            } else {
                return <SubMenu
                    key={item.path}
                    title={
                        <span>
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {getMenuNodes(item.children)}
                </SubMenu>
            }
        }, []);
    };


    return <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[path]}
        style={{ width: 150, height: '100vh' }}>
        {getMenuNodes(menuList)}
    </Menu>
}

export default withRouter(Sidebar)