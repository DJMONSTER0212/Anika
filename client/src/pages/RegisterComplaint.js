import { Button, Form, Input } from 'antd';
import React, { useState,useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const RegisterComplaint = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  
  const userAuth = JSON.parse(localStorage.getItem('auth'));
  const email = userAuth.user.email;
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log("values => ", values);
    // return;
    const { data } = await axios.post("/complaint_register", values);
      console.log("Complaint response => ", data);
    try {
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
      setLoading(true);
      toast.success("Complaint Registered Successfully!")
      navigate('/home')
      }
    }catch (err) {
      console.log("err => ", err);
      setLoading(false);
      toast.error("Complaint Registration Failed. Try again.");
    }
  }
  
  return (
    <div className='container pt-4'>
      <h1>Complaint Form</h1>
        <Form
      layout={formLayout}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item label="Email Address" name="email" rules={[{ required: true}]}>
        <Input defaultValue={email}/>
      </Form.Item>
      <Form.Item label="Title" name="name" rules={[{ required: true, message: 'Enter Title of the Complaint!' }]}>
        <Input placeholder="Title of Complaint" />
      </Form.Item>
      <Form.Item label="Contact Number" name="number" rules={[{ required: true, message: 'Enter Your Mobile Number Correctly!' }]}>
        <Input placeholder="10 Digit Mobile Number" />
      </Form.Item>
      <Form.Item label="Your Designation" name="designation">
        <Input placeholder="e.g. Assistant executive" />
      </Form.Item>
      <Form.Item label="Aadhar Number" name="aadhar" rules={[{ required: true, message: 'Enter 12 Digit Aadhar Number!' }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Your Organization" name="organization" rules={[{ required: true, message: 'Enter your Organization name!' }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Name(s) of Accused" name="accusedname" rules={[{ required: true, message: 'Enter Title of the Complaint!' }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Department and Designation of Accused/Respondent" name="accusedDept" rules={[{ required: true, message: 'Enter Accused Employee Details!' }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Organization of Accused" name="accusedOrg" rules={[{ required: true }]}>
        <Input placeholder="" />
      </Form.Item><Form.Item label="Brief Description of incident" name="briefDec" rules={[{ required: true, message: 'Write anything what you felt was not good!' }]}>
        <Input placeholder="" />
      </Form.Item>

      <Form.Item >
        <Button loading={loading} htmlType="submit" type="primary">Submit</Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};
export default RegisterComplaint;