import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { fetchStudent, setFetched } from '../../redux/studentInformation'
import {useSelector, useDispatch} from 'react-redux'


const ErrorPage = () => {
    // document.querySelector("title").innerText = `404 - Error Page`
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    const  token = localStorage.token
    let dispatch = useDispatch();
    const formik = useFormik({
      initialValues:{
        firstName: studentInfo.firstName,
        lastName: studentInfo.lastName,
        phoneNumber: studentInfo.phoneNumber,
        email: studentInfo.email,
        address: studentInfo.address,
        localGovernment:  studentInfo.localGovernment,
        state: studentInfo.state
      },
      onSubmit: async(values)=>{
        let endpoint = 'http://localhost:7777/student/updateinfo'
        try {
          const update = await axios.post(endpoint, {...values, token})
          console.log(update)
          dispatch(fetchStudent(update.data))
        } catch (error) {
          console.log(error)
        }
      }
    })
  return (
    <>
        <div className='w-100 px-4'>
          <h3>Edit Your Profile</h3>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' {...formik.getFieldProps('firstName')} className='form-control' placeholder='First Name' id='firstName' />
            <label htmlFor='lastName'>Last Name</label>
            <input type='text'{...formik.getFieldProps('lastName')} className='form-control' placeholder='Last Name' id='lastName' />
            <label htmlFor='email'>Email</label>
            <input type='email' {...formik.getFieldProps('email')} className='form-control' placeholder='Email' id='email' />
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='tel' {...formik.getFieldProps('phoneNumber')} className='form-control' placeholder='Phone Number' id='phoneNumber' />
            <label htmlFor='address'>Address</label>
            <input type='text' {...formik.getFieldProps('address')} className='form-control' placeholder='Address' id='address' />
            <label htmlFor='localGovernment'>Local Goverment</label>
            <input type='text' {...formik.getFieldProps('localGovernment')} className='form-control' placeholder='Local Goverment' id='localGovernment' />
            <label htmlFor='state'>State</label>
            <input type='text' {...formik.getFieldProps('state')} className='form-control' placeholder='State' id='state' />
            <button type='submit' className='btn blue500 my-2 w-100'>Update Profile</button>
          </form>
        </div>
    </>
  )
}

export default ErrorPage