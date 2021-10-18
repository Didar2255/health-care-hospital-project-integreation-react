import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Components/Banner/Banner';
import SingleService from '../../Components/SingleService/SingleService';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./homeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container>
                <h1>Our Services</h1>
                <Row xs={1} md={3} ms={12} className="g-4">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;