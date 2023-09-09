import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LandingNav from '../LandingPage/LandingNav';
import SendLink from './SendLink';
import SetNewPassword from './SetNewPassword';

const ForgottenPasswordPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const token = params.token;

    if (typeof token === 'undefined' || token === '') {
        navigate('/signin');
    }

    return (
        <div>
            <LandingNav />
            <div className="vh-100 d-flex justify-content-center align-items-center border border-3">
                {token === undefined ? <SendLink /> : <SetNewPassword token={token} />}
            </div>
        </div>
    );
}

export default ForgottenPasswordPage;
