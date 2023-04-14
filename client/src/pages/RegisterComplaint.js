import React, { useState } from 'react'
import axios from "axios";

const RegisterComplaint = () => {
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [designation,setDesig] =  useState("");
  const [aadhar,setAadhar] =  useState("");
  const [org,setOrg] = useState("");
  const [aorg,setAorg] = useState("");
  const [aname,setAname] = useState("");
  const [adesg,setAdesg] = useState("");
  const [desc,setDes] = useState("");
  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post("/complaint_register",{name,number,designation,aadhar,org,aorg,aname,adesg,desc},config);
      console.log(JSON.stringify(data));
      
    } catch (error) {
      console.log("Some error Occured"); 
    }
  }
  return (
    <>
    <div className='container'>
      <form method='post' >
      <div className="row my-2">
        <div className='col-sm-2'>
          <label htmlFor="complainantName" className="form-label ">Name of the Complainant* </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" name='compalinantName' onChange={(event)=>{setName(event.target.value);}} className="form-control " id="complainantName" aria-describedby="emailHelp" required/>
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label htmlFor="cnumber" className="form-label ">Contact No.* </label>
        </div>
        <div className='col-sm-9'>
              <input type="text" name='cnumber' onChange={(event) => { setNumber(event.target.value);}} className="form-control " id="cnumber" aria-describedby="emailHelp" required/>
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label htmlFor="designation" className="form-label">Designation </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" className="form-control " onChange={(event)=>setDesig(event.target.value)} name='designation' id="designation" aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label htmlFor="aadhar_box" className="form-label ">Aadhar Number* </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" onChange={(event)=>setAadhar(event.target.value)} className="form-control " name='aadhar' id="aadhar_box" aria-describedby="emailHelp" required />
        </div>
      </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label htmlFor="uorganization" className="form-label ">Organization</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" className="form-control " onChange={(event)=>setOrg(event.target.value)} name='uorganization' id="uorganization" aria-describedby="emailHelp" />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label htmlFor="accusedname" className="form-label ">Name&#40;s&#41; of Accused*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" className="form-control " onChange={(event)=>setAname(event.target.value)} name='accusedname' id="accusedname" aria-describedby="emailHelp" required />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label htmlFor="accusedDept" className="form-label ">Department and Designation of Accused/Respondent*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" className="form-control " onChange={(event)=>setAdesg(event.target.value)} name='accusedDept' id="accusedDept" aria-describedby="emailHelp" required />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label htmlFor="accusedOrg" className="form-label ">Organization of the Accused*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" className="form-control " name='accusedOrg' onChange={(event)=>setAorg(event.target.value)} id="accusedOrg" aria-describedby="emailHelp" required />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label htmlFor="description" className="form-label ">Brief Description of incident*</label>
          </div>
          <div className='col-sm-9'>
              <input type="text" className="form-control " onChange={(event) => setDes(event.target.value)} name='description' id="description" aria-describedby="emailHelp" required />
          </div>
        </div>
        
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default RegisterComplaint
