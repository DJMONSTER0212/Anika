import React from 'react'

const Userchat = (props) => {
  return (
    <div className='container row'>
      <div className='col-sm-8 text-end'> {props.text}</div>
      <label for="exampleInputEmail1" className="form-label col-sm-4 "> : You  </label>
    </div>
  )
}

export default Userchat
