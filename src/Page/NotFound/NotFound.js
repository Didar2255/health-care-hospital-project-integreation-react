import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Images/Error/img.svg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error my-5'>
            <img src={img} alt="" />
            <h1>Page not found</h1>
            <p>The page you want to go is not currently available</p>
            <Link to='/home'>
                <Button variant='btn btn-danger'>Go to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;