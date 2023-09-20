import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPasswordForm = ({userDetails}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();


  const handleNewPasswordChange = (e) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);
    setPasswordsMatch(newPasswordValue === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordsMatch(newPassword === confirmPasswordValue);
  };

  const saveNewPassword =()=>{
    axios.post('http://localhost:7777/student/change_password', {
      studentClass: userDetails.studentClass,
      email: userDetails.email,
      newPassword
    }).then((res)=>{
      if (res.status==200) {
        alert('Password changed successfully')
        navigate('/signin')
      } else{
        alert('Error in saving your password, please try again')
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  return (
    <div>
      <h2>Change Password</h2>
      <div className="mb-3">
        <label htmlFor="newPassword" className="form-label">New Password</label>
        <input
          type="password"
          className="form-control"
          id="newPassword"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input
          type="password"
          className={`form-control ${passwordsMatch ? '' : 'is-invalid'}`}
          id="confirmPassword"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordsMatch && (
          <p className="invalid-feedback">Passwords do not match.</p>
        )}
      </div>
      <button
        className="btn btn-primary"
        onClick={saveNewPassword}
        disabled={!passwordsMatch}
      >
        Change Password
      </button>
    </div>
  );
};

export default NewPasswordForm;
