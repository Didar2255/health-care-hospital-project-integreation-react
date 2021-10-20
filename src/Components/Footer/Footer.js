import React from 'react';
import './Footer.css'
import logo from '../../Images/Logo/unnamed-removebg-preview.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="row">
                <div className='col-md-4 col-12'>
                    <h1>Doctor's Point</h1>
                    <ul>
                        <li><a href="/"> F1 Dhaka Main City</a></li>
                        <li><a href="/">Office NO 21658</a></li>
                        <li><a href="/">info@gmail.com</a></li>
                        <li><a href="/">Phone : 15498248</a></li>
                    </ul>
                    <input className='p-1' type="text" placeholder='Email' />
                    <button className='btn btn-danger py-1'>Send</button>
                </div>
                <div className='col-md-4 col-12'>
                    <h4>Our Departments</h4>
                    <ul>
                        <li><a href="/">Home Care</a></li>
                        <li><a href="/">Diagnosis & Investigation</a></li>
                        <li><a href="/">Medical & Surgical</a></li>
                        <li><a href="/">Dental Care</a></li>
                        <li><a href="/">Special Support service</a></li>
                    </ul>
                </div>
                <div className='col-md-4 col-12'>
                    <h4>Connect With us</h4>
                    <div className="social-link">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;