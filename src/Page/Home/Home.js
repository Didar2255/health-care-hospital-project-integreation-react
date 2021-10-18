import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Components/Banner/Banner';
import QuestionAns from '../../Components/QuestionAns/QuestionAns';
import SingleService from '../../Components/SingleService/SingleService';
import './Home.css'

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
                <div className='my-5'>
                    <h1>Our Services</h1>
                </div>
                <div className="my-5">
                    <Row xs={1} md={3} ms={12} className="g-4">
                        {
                            services.map(service => <SingleService
                                key={service.id}
                                service={service}
                            ></SingleService>)
                        }
                    </Row>
                </div>
                <QuestionAns></QuestionAns>
            </Container>

        </div>
    );
};

export default Home;