import React, { useState } from 'react';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

};

  return (
    <form onSubmit={handleSubmit}>
        <p>Are you sure you want to proceed without entering your password? A reset email will be sent to your registered email address.</p>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
