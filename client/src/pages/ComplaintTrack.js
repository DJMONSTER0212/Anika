import React, { useEffect, useState } from 'react';
import axios from "axios";
const ComplaintTrack = () => {
    const [progress,setProgress] = useState("2%");
    const [desc,setDesc] = useState("Description");
    const userAuth = JSON.parse(localStorage.getItem('auth'));
    const email = userAuth.user.email;
    const getprogress = async()=>{
        const { data } = axios.get('/progress',{email:email});
    }
    useEffect(() => {
        getprogress();
    },[]);
  return (
    <>
    <div className='container'>
        <h1 className='mb-5'> Complaint Status</h1>
          <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
              <div className="progress-bar" style={{width:progress}}></div>
          </div>
    </div>
    <div className='container my-5'>
        {desc}
    </div>
      </>
  )
}

export default ComplaintTrack
