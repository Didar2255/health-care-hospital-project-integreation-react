import React from 'react';
import { Button, Form } from 'react-bootstrap';
import image from '../../Images/Doctor/successful-medical-team.jpg'
import './Appointment.css'

const Appointment = () => {
    return (
        <div className='row my-5 appointment'>
            <div className="col-md-6 col-12">
                <h1 className=''>Get your an Appointment</h1>
                <p>Just send a message,we will be answered within 5 minutes !</p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <div className="d-flex align-items-center justify-content-between">
                            <Form.Control className='me-4' type="text" placeholder="Your Full Name" />
                            <Form.Control type="email" placeholder="Mail address" />
                        </div><br />
                        <div className="d-flex align-items-center justify-content-between">
                            <Form.Control className='me-4' type="text" placeholder="Phone Number" />
                            <Form.Control type="text" placeholder="Subject" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className='button'>Send Your Massage</Button>
                </Form>
            </div>
            <div className="col-md-6 col-12">
                <img src={image} className='img-fluid rounded' alt="" />
            </div>
        </div>
    );
};

export default Appointment;