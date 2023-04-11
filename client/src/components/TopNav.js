
import { Menu } from "antd";
import {
  UserDeleteOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined 
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

// const API = "http://localhost:8000/api" 


const TopNav = () => {

 
  return (
    <Menu
      // onClick={handleClick}
      // selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="mail" icon={<UserDeleteOutlined />}>
        <Link to="/">
          ANIKA
        </Link>
      </Menu.Item>
      <>
        <Menu.Item key="signup" icon={<UserAddOutlined />} style={{ marginLeft: "auto" }}>
          <Link to="/signup">
            Signup
          </Link>
        </Menu.Item>
        <Menu.Item key="signin" icon={<UserOutlined />}>
          <Link to="/signin">
            Signin
          </Link>
        </Menu.Item>
      </>
     
      
      



      <>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title={"Dashboard"}
        style={{ marginLeft: "auto" }}
      >
        <Menu.ItemGroup title="Management">
          <Menu.Item key="setting:2">
            <Link to="#"> 
              Dashboard
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="signout" icon={<LogoutOutlined />}>
      <Link to="/signin">
        Sign Out
      </Link>
    </Menu.Item>
    </>
    </Menu>
  );
};

export default TopNav;
