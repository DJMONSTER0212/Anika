import React from 'react'
import { Link } from "react-router-dom";
import image from '../assets/banner.png'
const UserDash = () => {
  return (
    <div>
      <div className="bg-danger" style={{height: "300px", display: "flex"}}>
        <div style={{flexBasis: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <p style={{fontSize: "100px", textShadow: "4px 6px 4px rgba(0,0,0,0.25)", color: "white"}}>Anika</p>
          <p style={{fontSize: "30px"}}><i>Be Fearless...</i></p>
        </div>
        <div>
          <img src={image} style={{height: "100%",display: 'flex', justifyContent: 'end'}}/>
        </div>
      </div>
      <div className="second-container mt-4" style={{display: "flex", justifyContent: "center", gap:"20px"}}>
        <Link className="bg-primary" to="/complaint" style={{width: "25%",borderRadius:10, height:"200px", color: "white", display: "flex" ,flexDirection: "column", fontSize: "30px", justifyContent: "center", textAlign: "center", textDecoration: "none"}}>
          <i className="fa-solid fa-registered"></i>
          <p>Register Your Complaint</p>
        </Link>
        <Link className="bg-danger" to="/complaint_track" style={{ width: "25%", borderRadius: 10,height:"200px", color: "white" ,display: "flex", flexDirection: "column", fontSize: "30px", justifyContent: "center", textAlign: "center" ,textDecoration: "none"}}>
          <i className="fa-solid fa-arrows-rotate"></i>
          <p>View Status of Complaint</p>
        </Link>
      </div>
      <div className="second-container mt-4" style={{display: "flex", justifyContent: "center" ,gap:"20px"}}>
        <Link className="bg-success" style={{ width: "25%", borderRadius: 10, height: "200px", color: " white", display: "flex", flexDirection: "column", fontSize: "30px", justifyContent: "center", textAlign: "center", textDecoration: "none" }} to="/chat-support">
          <i className="fa-brands fa-rocketchat"></i>
          <p>Real-Time Chat Assistance</p>
        </Link>
        <Link className="bg-warning" style={{ width: "25%", borderRadius: 10, height: "200px", color: "black", display: "flex", flexDirection: "column", fontSize: "30px", justifyContent: "center", textAlign: "center", textDecoration: "none" }} to="/sos">
          <i className="fa-solid fa-hand-holding-medical"></i>
          <p>Emergency SOS</p>
        </Link>
      </div>
    </div>
  )
}

export default UserDash
