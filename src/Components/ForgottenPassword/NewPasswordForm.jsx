import React, { useState } from 'react';

const NewPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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
          <div className="invalid-feedback">Passwords do not match.</div>
        )}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          // Handle the password change logic here
        }}
        disabled={!passwordsMatch}
      >
        Change Password
      </button>
    </div>
  );
};

export default NewPasswordForm;
