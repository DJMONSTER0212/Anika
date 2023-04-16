import React from 'react'

const Botchat = (props) => {
  return (
    <div className='row'>
      <label for="exampleInputEmail1" class="form-label text-end col-sm-4">Anika-🤖</label>
      <div className='col-sm-8'>
        : {props.text}

      </div>
    </div>
  )
}

export default Botchat
