import React, {useEffect} from 'react'
import NewPasswordForm from './NewPasswordForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const SetNewPasswordForm = ({}) => {
  const navigate = useNavigate();
  

  useEffect(()=>{
    axios.post('http://localhost:7777/student/check_password_link_validity', {token})
    .then((res)=>{
      console.log(res)
      if(res.status==203){
        alert('Invalid or expired token')
        navigate('/signin')
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div>
      <NewPasswordForm/>
    </div>
  )
}

export default SetNewPasswordForm;