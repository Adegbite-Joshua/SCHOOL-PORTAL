import React from 'react'

const ContactUsBox = () => {
  return (
    <>
        <div className='ContactUsBox p-3'>
            <h3>Admission Inquiries</h3>
            <div>
                <label htmlFor="">First Name:</label>
                <input type="text" className='form-control my-1' />
                <label htmlFor="">Last Name:</label>
                <input type="text" className='form-control my-1' />
                <label htmlFor="">Email:</label>
                <input type="text" className='form-control my-1' />
                <label htmlFor="">Phone:</label>
                <input type="text" className='form-control my-1' />
                <label htmlFor="">Questions / Comments:</label>
                {/* <input type="text" className='form-control my-1' /> */}
                <textarea name="" className='d-block w-100' rows='4' id="">
                </textarea>
                <div className='d-flex justify-content-end my-2'><button className='btn btn-warning p-2 rounded-0 ms-auto'>Submit</button></div>
            </div>
        </div>
    </>
  )
}

export default ContactUsBox