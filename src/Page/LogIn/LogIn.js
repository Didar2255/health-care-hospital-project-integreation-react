import React from 'react';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='my-5'>
            <div className='login-box'>
                <h1>Please Sign-In</h1>
                <div className="text-box">
                    <i class="fas fa-user"></i>
                    <input type="email" name="" id="" placeholder='User Mail' />
                </div>
                <div className="text-box">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="" id="" placeholder='User Password' />
                </div>
                <input className='btn btn-danger login-button' type="button" value="Sign in" />

                <div className="d-flex align-items-center justify-content-around">
                    <button onClick='' className='btn btn-primary me-2 login-button'><i class="fab fa-google"></i> Google</button>
                </div>
                <p>New User ! Please Register ?</p>
            </div>
        </div>
    );
};

export default LogIn;