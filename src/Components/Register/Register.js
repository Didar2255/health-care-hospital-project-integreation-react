import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { hendelEmailChange, hendelPasswordChange, hendelRegistration, hendelResetPassword, error, hendelNameChange } = useAuth()
    return (
        <div className='my-5'>
            <div className='login-box'>
                <form onSubmit={hendelRegistration}>
                    <h1>Register your Account :</h1>
                    <div className="text-box">
                        <i className="fas fa-user"></i>
                        <input onBlur={hendelNameChange} type="text" name="" id="" placeholder='Enter your Name' required />
                    </div>
                    <div className="text-box">
                        <i className="fas fa-user"></i>
                        <input onBlur={hendelEmailChange} type="email" name="" id="" placeholder='User Mail' required />
                    </div>
                    <div className="text-box">
                        <i className="fas fa-lock"></i>
                        <input onBlur={hendelPasswordChange} type="password" name="" id="" placeholder='User Password' />
                    </div>
                    <div className='text-danger'>
                        {error}
                    </div>
                    <button className=' btn btn-danger login-button' type='submit'>Create Account</button>
                    <button onClick={hendelResetPassword} className=' btn btn-success login-button' type='button'>Reset Password</button>

                    <Link to='./login'>Already Have an Account ?</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;