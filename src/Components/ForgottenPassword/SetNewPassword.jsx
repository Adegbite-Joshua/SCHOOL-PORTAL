import React, {useEffect} from 'react'
import NewPasswordForm from './NewPasswordForm'
import axios from 'axios'


const SetNewPasswordForm = () => {
  useEffect(()=>{
    axios.post('', {token})
  },[])
  return (
    <div>
      <NewPasswordForm/>
    </div>
  )
}

export default SetNewPasswordForm;