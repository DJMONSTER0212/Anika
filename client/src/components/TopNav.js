
import { Menu } from "antd";
import {
  UserDeleteOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined 
} from "@ant-design/icons";
import { Link } from "react-router-dom";
// importing for signout
import { AuthContext } from '../context/auth'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const { SubMenu } = Menu;

// const API = "http://localhost:8000/api" 



const TopNav = () => {

  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  

  const [auth,setAuth] = useContext(AuthContext)

 

  const navigate = useNavigate()
  const signOut =()=>{
    //remove from local storage 
    localStorage.removeItem("auth")
    
    //remove from context 
    setAuth({
      user:null,
      token:""
    })
    // redirect to login 
   
    navigate("/signin")


  }

  const roleBasedLink =()=>{
      if(auth?.user?.role === 'Admin')
      return '/admin'
      else if(auth?.user?.role === 'Author')
      return '/author'
      else
      return "/subscriber";
    
    };


 
    return (
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="mail" icon={<UserAddOutlined />}>
          <Link to="/">
            ANIKA
          </Link>
        </Menu.Item>
        {auth && auth.user===null &&(<>
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
        )}
        
        
  
  
        {auth?.user!==null && (<><SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title={auth?.user?.name || "Dashboard"}
          style={{ marginLeft: "auto" }}
        >
          <Menu.ItemGroup title="Management">
            <Menu.Item key="setting:2">
              <Link to={roleBasedLink()}> 
                Dashboard
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="signout" icon={<LogoutOutlined />} onClick={()=>{signOut()}}>
        <Link to="/signin">
          Sign Out
        </Link>
      </Menu.Item>
      </>
        )}
        {/* <Menu.Item>
          <ToggleTheme />
        </Menu.Item> */}
      </Menu>
    );
  };
  
  export default TopNav;