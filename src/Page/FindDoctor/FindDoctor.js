import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './FindDoctor.css'


const FindDoctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./DoctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className=" doctor-title text-center d-flex align-items-center justify-content-center my-5">
                <div>
                    <h1>Advanced Carefully Doctor</h1>
                    <p>Why our services is best all time since 1990. desires to obtain of itself, because it is pain, <br /> but because occasionally circums tanceprocure him some great deals.</p>
                </div>
            </div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {doctors.map(doctor => console.log(doctor))}
                </Row>
            </Container>
        </div>
    );
};

export default FindDoctor;