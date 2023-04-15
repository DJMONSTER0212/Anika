import React from 'react'

const Userchat = (props) => {
  return (
    <div className='container '>
      <label for="exampleInputEmail1" class="form-label"> You : </label> {props.text}
    </div>
  )
}

export default Userchat
