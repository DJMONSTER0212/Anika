import React, { useState, useEffect } from "react";
import { Menu, Button, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useWindowWidth } from "@react-hook/window-size";
import {

  MacCommandOutlined,
  SettingOutlined,
  BankOutlined,
} from "@ant-design/icons";


const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  // hooks
  const onlyWidth = useWindowWidth();

  useEffect(() => {
     setCurrent(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    if (onlyWidth < 800) {
      setCollapsed(true);
    } else if (onlyWidth > 800) {
      setCollapsed(false);
    }
  }, [onlyWidth < 800]);

  const activeName = (name) => `${current === name && "active"}`;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Menu
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["2", "5"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<SettingOutlined />}>
          <Link to="/admin">
            <a className={activeName("/admin")}>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* Complaints */}
        <SubMenu key="2" icon={<MacCommandOutlined />} title="Complaints">
          <Menu.Item key="3">
            <Link to="/admin/complaints/pending">
              <a className={activeName("/admin/complaints/pending")}>Pending Complaints</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/admin/complaints">
              <a className={activeName("/admin/complaints")}>Solved Complaints</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* Organization */}
        <SubMenu key="5" icon={<BankOutlined />} title="Organization">
          <Menu.Item key="6">
            <Link to="/admin/organization/library">
              <a className={activeName("/admin/organization/library")}>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/admin/organization/new">
              <a className={activeName("/admin/organization/new")}>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

      </Menu>
    </Sider>
  );
};

export default AdminNav;
