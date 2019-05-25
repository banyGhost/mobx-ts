import React from 'react';
import { Menu, Icon } from 'antd';
import history from '../utils/history';

interface MenuProps {
  key: string;
  path: string;
  text: string;
  icon?: string;
}

const menuList: MenuProps[] = [
  {
    key: '1',
    path: '/',
    text: 'todos',
  },
  {
    key: '2',
    path: '/user',
    text: 'user',
  },
];

const SubMenu = Menu.SubMenu;

class NMenu extends React.Component {
  handleMenuClick = (menu: MenuProps) => {
    history.push(menu.path);
  };
  render() {
    return (
      <Menu style={{ width: 256, height: '100%' }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }>
          {menuList.map(menu => (
            <Menu.Item onClick={this.handleMenuClick.bind(null, menu)} key={menu.key}>
              {menu.text}
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    );
  }
}

export default NMenu;
