import React from 'react'
import axios from 'axios'
const Sos = () => {
    const handleClick = async(event)=>{
        event.preventDefault();
        console.log("hoi")
        const {data} = axios.post('/emergency',{})
    }
  return (
    <div className='container d-flex justify-content-center ' style={{position:'absolute',top:"300px"}}>
          <button type="submit" onClick={handleClick} className="btn btn-danger btn-lg">Emergency SOS</button>
    </div>
  )
}

export default Sos
