import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LandingNav from '../LandingPage/LandingNav';
import SendLink from './SendLink';
import SetNewPassword from './SetNewPassword';

const ForgottenPasswordPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');
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
