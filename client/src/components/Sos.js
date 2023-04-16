import React from 'react'
import axios from 'axios'
const Sos = () => {
    const handleClick = async(event)=>{
        event.preventDefault();
        console.log("hoi")
        const {data} = axios.post('/emergency',{})
    }
  return (
    <div>
          <button type="submit" onClick={handleClick} className="btn btn-danger">Emergency SOS</button>
    </div>
  )
}

export default Sos
