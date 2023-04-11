import React from 'react'

const RegisterComplaint = () => {
  return (
    <>
    <div className='container'>
      <form action="">
      <div className="row my-2">
        <div className='col-sm-2'>
          <label for="complainantName" class="form-label ">Name of the Complainant* </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" name='compalinantName' class="form-control " id="complainantName" aria-describedby="emailHelp" required/>
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label for="cnumber" class="form-label ">Contact No.* </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" name='cnumber' class="form-control " id="cnumber" aria-describedby="emailHelp" required/>
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label for="email_box" class="form-label ">Email address* </label>
        </div>
        <div className='col-sm-9'>
          <input type="email" class="form-control " name='email' id="email_box" aria-describedby="emailHelp" required/>
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label for="designation" class="form-label ">Designation </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" class="form-control " name='designation' id="designation" aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="row my-2">
        <div className='col-sm-2'>
          <label for="aadhar_box" class="form-label ">Aadhar Number* </label>
        </div>
        <div className='col-sm-9'>
          <input type="text" class="form-control " name='aadhar' id="aadhar_box" aria-describedby="emailHelp" required />
        </div>
      </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label for="uorganization" class="form-label ">Organization</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" class="form-control " name='uorganization' id="uorganization" aria-describedby="emailHelp" />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label for="accusedname" class="form-label ">Name&#40;s&#41; of Accused*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" class="form-control " name='accusedname' id="accusedname" aria-describedby="emailHelp" required />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label for="accusedDept" class="form-label ">Department and Designation of Accused/Respondent*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" class="form-control " name='accusedDept' id="accusedDept" aria-describedby="emailHelp" required />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label for="accusedOrg" class="form-label ">Organization of the Accused*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" class="form-control " name='accusedOrg' id="accusedOrg" aria-describedby="emailHelp" required />
          </div>
        </div>
        <div className="row my-2">
          <div className='col-sm-2'>
            <label for="description" class="form-label ">Brief Description of incident*</label>
          </div>
          <div className='col-sm-9'>
            <input type="text" class="form-control " name='description' id="description" aria-describedby="emailHelp" required />
          </div>
        </div>
        
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  )
}

export default RegisterComplaint
