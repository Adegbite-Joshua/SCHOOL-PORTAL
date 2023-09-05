import React from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav';

const ForgottenPasswordPage = () => {
    const forgottenPassword =()=>{

    }
    return (
        <div className='d-flex allWrap'>
            <StudentSideNav/>
            <div className="container">
                <h2>Forgot Password</h2>
                <p>Are you sure you want to proceed without entering your password? A reset email will be sent to your registered email address.</p>
                <button className="btn btn-primary" onClick={forgottenPassword}>
                Proceed
                </button>
            </div>
        </div>
    );
}

export default ForgottenPasswordPage;