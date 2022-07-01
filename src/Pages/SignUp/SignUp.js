import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='signup'>
            <Link to={'/login'}>Already Have an account</Link>
        </div>
    );
};

export default SignUp;