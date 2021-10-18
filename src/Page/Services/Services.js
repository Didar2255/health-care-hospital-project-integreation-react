import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Service from '../../Components/Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='my-4'>All Services</h1>
            <Container className='my-4'>
                <Row xs={1} md={3} ms={1} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
            <div className="information d-flex align-items-center justify-content-around my-5">
                <div></div>
                <div className='ms-5'>
                    <h1>TAKE A LOOK AT OUR HEALTH</h1>
                    <Button variant='btn btn-danger p-2 rounded '>Join Our Family <i class="fas fa-arrow-alt-circle-right"></i></Button>
                </div>
            </div>
        </div>
    );
};

export default Services;