import React from "react";

import { Layout, Menu } from "antd";

import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

function Navbar() {
  const location = useLocation();
  const defaultSelectedKeys = location.pathname === "/favorites" ? ["2"] : ["1"];

  return (
    <Header>
      <Menu defaultSelectedKeys={defaultSelectedKeys} theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Search</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
