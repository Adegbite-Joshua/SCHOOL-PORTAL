import React from 'react'


const StudentSocialMedia = () => {
    // document.querySelector("title").innerText = ``
  return (
    <>
        <div className='w-100'>
          <h3 classname='p-3'>Add Your Social Media Link</h3>
          <div className='w-100 px-4'>
            <label htmlFor='emailaddress'>Twitter Address</label>
            <input name='setting' type='link' className='form-control w-50 d-block' placeholder='Email Address' id='emailaddress' />
            <div name='setting' className='d-block w-50 ms-auto'>
                <label htmlFor='facebooklink'>Facebook Link</label>
                <input type='link' className='form-control' placeholder='Facebook Link' id='facebooklink' />
            </div>
            <label htmlFor='whatsappNumber'>WhatsApp Number</label>
            <input type='tel' name='setting' className='form-control w-50 d-block' placeholder='WhatsApp Link' id='whatsapplink' />
            <div name='setting' className='d-block w-50 ms-auto'>
                <label htmlFor='otherLinks'>Other Link</label>
                <input type='link' className='form-control' placeholder='Other Link' id='otherLink' />
            </div>
          <button className='btn btn-success w-100 my-2'>Submit</button>
          </div>
        </div>
    </>
  )
}

export default StudentSocialMedia