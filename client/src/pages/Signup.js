import { Form, Input, Button, Checkbox, Col, Row, Radio } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import { useState,useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/auth";


function Signup() {

  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();


  const onFinish = async (values) => {
    // console.log("values => ", values);
    setLoading(true);
    try {
      const { data } = await axios.post(`/signup`, values);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        console.log("signup response => ", data);
        // save in context
        setAuth(data);
        // save in local storage
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Successfully signed up");
        setLoading(false);
        // redirect
        navigate('/home')
      }
    } catch (err) {
      toast.error("Signup failed. Try again.");
      console.log(err);
      setLoading(false);
    }
  };

 
  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Signup</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* name */}
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
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
          <Form.Item name="role" label="User">
          <Radio.Group>
            <Radio value="Female"> Female </Radio>
            <Radio value="Organization"> Organization </Radio>
          </Radio.Group>
        </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // loading={loading}
            >
              Register
            </Button>
            <br />
            Or{" "}
            <Link to="/signin">
              Login now!
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Signup;
