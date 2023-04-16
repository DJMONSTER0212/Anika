import React from 'react'
import AdminLayout from "../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button,List,Tag } from "antd";
import { useState, useEffect } from "react";
import axios from 'axios';

const PendingComplaints = () => {
    const progress_color={1:"red",2:"red",3:"orange",4:"orange"}
    // console.log(progress_color[1])
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
    <List
          itemLayout="horizontal"
          dataSource={complaints}
          renderItem={(item) => (item.progress!=5 && (
            <List.Item actions={[
                <Tag color={progress_color[1]} key={item.name}>
                {`Progress - ${item.progress}`}
              </Tag>,
                <Tag color={"black"} key={item.name}>
                {item.updatedAt}
              </Tag>
            ]}>
              <List.Item.Meta title={item.name}/>
              <hr/>
              {/* <p>{item.name}</p>  */}
            </List.Item>
        ))}
    />
    </div>
    </AdminLayout>
  )
}

export default PendingComplaints