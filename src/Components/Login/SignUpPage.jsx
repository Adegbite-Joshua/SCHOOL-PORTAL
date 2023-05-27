import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingNav from '../LandingPage/LandingNav'
import SignInPage from './SignInPage'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'



const SignUpPage = () => {
  const subjects = [
    'MATHEMATICS',
    'ENGLISH LANGUAGE',
    'YORUBA',
    'CIVIC EDUCATION',
    'COMPUTER STUDIES',
    'GEOGRAPHY',
    'ECONOMICS',
    'PHYSICS',
    'CHEMISTRY',
    'BIOLOGY',
    'ANIMAL HUSBANDRY',
    'FURTHER MATHEMATICS',
    'TECHNICAL DRAWING'
  ]
  const navigate = useNavigate()
  const signUp =()=>{
    navigate("/signin")
  }
  const [imageBaase64, setimageBaase64] = useState('')
  const submit = ({firstName, lastName, email, password, address, subjects, clas})=>{
    const details = {
      firstName,
      lastName,
      email,
      password,
      address,
      class: clas,
      pictureUrl: 'klkd',
      links: {
          twitter: '',
          facebook: '',
          whatsapp: '',
          other: ''
      },
      matricNumber: `HOPE${Math.round(Math.random()*100000)}`,
      localGovernment: '',
      state: '',
      country: '',
      proileUrl: '',
      subjects,
      messages: [],
      announcements: [],
      tasks: []
    }
    console.log(details);
    let endpoint = 'http://localhost:7777/student/signup'
    axios.post(endpoint, details)
    .then((res)=>{
      console.log(res);
      if(res.status==200){
        navigate("/signin")
      } else if(res.status==11000){
        console.log('email already exixts')
      } else if(res.status==401){
        console.log('error in validating')
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      subjects: [0,1],
      clas: 0
    },
    onSubmit: (values)=>{
      // console.log(values);
      submit(values)
    }
  })
  const selectImage =(e)=>{
    let file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload =()=>{
      setimageBaase64(reader.result)
    }
  }
  return (
    <>  
        <LandingNav/>
        <h3 className='text-center bg-light m-0 p-3'>Sign Up Page</h3>
        <div className="d-flex w-100 p-4 topSpace bg-light gap-3">
          <div className="border signup rounded-5">
              <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="firstName">First Name</label>
                  <input onChange={formik.handleChange} className='form-control my-2' type="text" id='firstName' name='firstName' placeholder='First Name' />
                  <label htmlFor="lastName">Last Name</label>
                  <input onChange={formik.handleChange} className='form-control my-2' id='lastName' name='lastName' type="text" placeholder='Last Name' />
                  <label htmlFor="email">Email</label>
                  <input onChange={formik.handleChange} className='form-control my-2' id='email' name='email' type="text" placeholder='Email' />
                  <label htmlFor="password">Password</label>
                  <input onChange={formik.handleChange} className='form-control my-2' id='password' name='password' type="text" placeholder='Password' />
                  <label htmlFor="clas">Class</label>
                  <select name="clas" id="clas" onChange={formik.handleChange} required className='form-control my-2'>
                    <option value="0">JSS1</option>
                    <option value="1">JSS2</option>
                    <option value="2">JSS3</option>
                    <option value="3">SSS1</option>
                    <option value="4">SSS2</option>
                    <option value="5">SSS3</option>
                  </select>
                  <label htmlFor="subjects">Subjects</label>
                  <select onChange={formik.handleChange} className='form-control my-2' multiple name='subjects' id="subjects">
                    <option selected disabled value={subjects.indexOf('MATHEMATICS')}> MATHEMATICS </option>
                    <option selected disabled value={subjects.indexOf('ENGLISH LANGUAGE')}> ENGLISH LANGUAGE </option>
                    <option value={subjects.indexOf('YORUBA')}> YORUBA </option>
                    <option value={subjects.indexOf('CIVIC EDUCATION')}> CIVIC </option>
                    <option value={subjects.indexOf('COMPUTER STUDIES')}> COMPUTER </option>
                    <option value={subjects.indexOf('GEOGRAPHY')}> GEOGRAPHY </option>
                    <option value={subjects.indexOf('ECONOMICS')}> ECONOMICS </option>
                    <option value={subjects.indexOf('PHYSICS')}> PHYSICS </option>
                    <option value={subjects.indexOf('CHEMISTRY')}> CHEMISTRY </option>
                    <option value={subjects.indexOf('BIOLOGY')}> BIOLOGY </option>
                    <option value={subjects.indexOf('ANIMAL HUSBANDRY')}> ANIMAL </option>
                    <option value={subjects.indexOf('FURTHER MATHEMATICS')}> FURTHER MATHS </option>
                    <option value={subjects.indexOf('TECHNICAL DRAWING')}> TECHNICA </option>
                  </select>
                  <label htmlFor='address'>Address</label>
                  <input type='text' className='form-control' onChange={formik.handleChange} placeholder='Address' id='address' name='address' />
                  <label htmlFor='firstName'>Local Goverment</label>
                  <input type='text' className='form-control' placeholder='Local Goverment' id='localGovernment' name='localGovernment' />
                  <label htmlFor='firstName'>State</label>
                  <input type='text' className='form-control' placeholder='State' id='state' name='state' />
                  <div style={{aspectRatio: '1'}} className='w-50 mx-auto bg-dark opacity-75 my-2 d-flex justify-content-center align-items-center'>
                    <h3 className='text-light'>Profile Picture</h3>
                    {/* <File */}
                  </div>
                  <input type="file" onChange={(e)=>selectImage(e)} name="pictureUrl" className='form-control' id="" />
                  <button type='submit' className='btn btn-success w-100 d-block my-2'>Sign Up</button>
                  <Link className='d-md-none text-light'>Sign In</Link>
              </form>
          </div>
          <div className=" signupOtherDiv rounded-5">     
              <span className='px-3 py-2 rounded-pill bg-dark text-light'><Link>Sign In</Link></span>
          </div>
        </div>
    </>
  )
}

export default SignUpPage