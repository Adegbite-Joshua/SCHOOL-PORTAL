import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'


const StudentSocialMedia = () => {
    // document.querySelector("title").innerText = ``
    const formik = useFormik({
      initialValues:{
        twitterlink: '',
        facebooklink: '',
        whatsapplink: '',
        otherlink: ''
      },
      onSubmit: (values)=>{
        updateDetails(values)
      }
    })
    const updateDetails = async({twitterlink,facebooklink,whatsapplink,otherlink})=>{
      let details = {
        'links.twitterlink': twitterlink,
        'links.facebooklink': facebooklink,
        'links.whatsapplink': whatsapplink,
        'links.otherlink': otherlink
      }
      let endpoint = 'http://localhost:7777/student/updateinfo'
      try {
       const upload = await axios.post(endpoint, details)
       console.log(res);
      } catch (error) {
       console.log(error);
      }
    }
  return (
    <>
        <form className='w-100' onSubmit={formik.handleSubmit}>
          <h3 classname='p-3'>Add Your Social Media Link</h3>
          <div className='w-100 px-4'>
            <label htmlFor='emailaddress'>Twitter Address</label>
            <input name='setting' type='link'  {...formik.getFieldProps('twitterlink')} className='form-control w-50 d-block' placeholder='Email Address' id='twitterlink' />
            <div name='setting' className='d-block w-50 ms-auto'>
                <label htmlFor='facebooklink'>Facebook Link</label>
                <input type='link'  {...formik.getFieldProps('facebooklink')} className='form-control' placeholder='Facebook Link' id='facebooklink' />
            </div>
            <label htmlFor='whatsappNumber'>WhatsApp Number</label>
            <input type='tel' name='setting'  {...formik.getFieldProps('whatsapplink')} className='form-control w-50 d-block' placeholder='WhatsApp Link' id='whatsapplink' />
            <div name='setting' className='d-block w-50 ms-auto'>
                <label htmlFor='otherLinks'>Other Link</label>
                <input type='link'  {...formik.getFieldProps('otherlink')} className='form-control' placeholder='Other Link' id='otherlink' />
            </div>
            <button type='submit' className='btn blue500 w-100 my-2'>Submit</button>
          </div>
        </form>
    </>
  )
}

export default StudentSocialMedia