import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState([])
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch(`/homeData.json`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    useEffect(() => {
        const value = service.find(serviceDetails => serviceDetails.id === parseInt(id))
        console.log(value)
        setSingleService(value)

    }, [service])


    return (
        <div className='my-5'>
            <h2 className='my-4'>Service Details </h2>
            <p>We try provide our best service</p>
            <div className="d-flex align-items-center justify-content-center text-white ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={singleService?.serviceImg} />
                    <Card.Body className='card-details'>
                        <Card.Title>{singleService?.serviceName}</Card.Title>
                        <Card.Text>
                            <p>Daily Price : $ {singleService?.price}</p>
                        </Card.Text>
                        <Button>Appointment Now</Button><br /><br />
                        <Link to='/home'>
                            <Button variant="danger">Go Home</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ServiceDetails;