import React from 'react'


const ErrorPage = () => {
    // document.querySelector("title").innerText = `404 - Error Page`
  return (
    <>
        <div className='w-100 px-4'>
          <h3>Edit Your Profile</h3>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' className='form-control' placeholder='First Name' id='firstName' />
          <label htmlFor='firstName'>Last Name</label>
          <input type='text' className='form-control' placeholder='First Name' id='firstName' />
          <label htmlFor='firstName'>Email</label>
          <input type='text' className='form-control' placeholder='Email' id='firstName' />
          <label htmlFor='firstName'>Phone Number</label>
          <input type='text' className='form-control' placeholder='Phone Number' id='firstName' />
          <label htmlFor='firstName'>Address</label>
          <input type='text' className='form-control' placeholder='Address' id='firstName' />
          <label htmlFor='firstName'>Local Goverment</label>
          <input type='text' className='form-control' placeholder='Local Goverment' id='firstName' />
          <label htmlFor='firstName'>State</label>
          <input type='text' className='form-control' placeholder='State' id='firstName' />

          <button className='btn blue500 my-2 w-100'>Update Profile</button>
        </div>
    </>
  )
}

export default ErrorPage