import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const { doctorName, position, doctorImg } = props.doctor
    return (
        <Col>
            <Card className='doctor-card'>
                <Card.Img variant="top" src={doctorImg} />
                <Card.Body>
                    <Card.Title>{doctorName}</Card.Title>
                    <Card.Text>
                        {position}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;