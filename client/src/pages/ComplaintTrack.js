import React, { useState } from 'react'

const ComplaintTrack = () => {
    const [progress,setProgress] = useState("2%");
    const [desc,setDesc] = useState("Description");
    
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
