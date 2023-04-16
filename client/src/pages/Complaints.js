import React from 'react'
import AdminLayout from "../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button,List,Tag } from "antd";
import { useState, useEffect } from "react";
import axios from 'axios';

const Complaints = () => {

  //hooks 
  const [form] =Form.useForm();

  // Bring in all the data to frontend
  const [complaints,setComplaints]= useState([])
  useEffect(()=>{
    getCategories();
  },[])

  const getCategories=async()=>{
    try{
      const {data} = await axios.get('/complaints');
      console.log(data);
      setComplaints(data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <AdminLayout>
    <h1>Solved Complaints List</h1>
    {/* <p>More content...</p> */}
    <div className='container'>
    <Col span={12} offset={6}>
    <List
          itemLayout="horizontal"
          dataSource={complaints}
          renderItem={(item) => (item.progress==5 && (
            <List.Item actions={[
                <Tag color={"black"} key={item.name}>
                {item.updatedAt}
              </Tag>,
              <Tag color={"green"} key={item.name}>
              {"Completed"}
            </Tag>,
            //   <a>Completed?</a>
            ]}>
              <List.Item.Meta title={`${item.name} - ${item.email} - ${item.organization}`}/>
              <hr/>
              {/* <p>{item.name}</p>  */}
            </List.Item>
        ))}
    />
    </Col>
    </div>
    </AdminLayout>
  )
}

export default Complaints