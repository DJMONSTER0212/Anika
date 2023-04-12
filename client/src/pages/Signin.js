import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/auth";

function Signin() {

  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();


  const onFinish = async (values) => {
    // console.log("values => ", values);
    const { data } = await axios.post("/signin", values);
      console.log("signin response => ", data);
    try {
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
      setLoading(true);
      
      // save user and token to context
      setAuth(data);
      // save user and token to local storage
      localStorage.setItem("auth", JSON.stringify(data));
      toast.success("Successfully signed in");
      // redirect user
      if(data?.user?.role === 'Admin')
      navigate('/admin');
      else if(data?.user?.role === 'Organization')
      navigate('/dashboard');
      else
      navigate('/home');
      }
    } catch (err) {
      console.log("err => ", err);
      setLoading(false);
      toast.error("Signin failed. Try again.");
    }
  };
  
     
    
  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Signin</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true, email:"user@mail.com", password:"userpassword" }}
          onFinish={onFinish}
        >
          {/* email */}
          <Form.Item name="email" rules={[{ type: "email" }]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Link to="/forgot-password">
            Forgot Password
          </Link>
          <br />
          <br />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <br />
            Or{" "}
            <Link to="/signup">
              Register now!
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Signin;
