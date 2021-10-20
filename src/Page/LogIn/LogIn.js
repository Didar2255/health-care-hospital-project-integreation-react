import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import './LogIn.css'

const LogIn = () => {
    const { hendelEmailChange, hendelPasswordChange, processLogIn, googleLogIn } = useAuth()
    return (
        <div className='my-5'>
            <div className='login-box'>
                <form onSubmit={processLogIn}>
                    <h1>Please Sign-In</h1>
                    <div className="text-box">
                        <i className="fas fa-user"></i>
                        <input onBlur={hendelEmailChange} type="email" name="" id="" placeholder='User Mail' />
                    </div>
                    <div className="text-box">
                        <i className="fas fa-lock"></i>
                        <input onBlur={hendelPasswordChange} type="password" name="" id="" placeholder='User Password' />
                    </div>
                    <button className=' btn btn-danger login-button' type='submit'>Log In</button>
                    <div className="d-flex align-items-center justify-content-around">
                        <button onClick={googleLogIn} className='btn btn-primary me-2 login-button'><i className="fab fa-google"></i> Sign with Google</button>
                    </div>
                    <Link to='/register'><p>New User ! Please Register ?</p></Link>
                </form>
            </div>
        </div>
    );
};

export default LogIn;