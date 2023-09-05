import React from 'react'
import ResetPasswordForm from './ResetPasswordForm';
// import jwt from 'jsonwebtoken';


const SendLink = () => {
  return (
    <div className="">
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      <ResetPasswordForm />
    </div>
  )
}

export default SendLink