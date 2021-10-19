import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const { serviceImg, serviceName, description, id } = props.service
    const url = `/SingleService/${id}`
    return (
        <Col>
            <Card className='home-card border-0'>
                <Card.Img variant="top" src={serviceImg} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Link to={url}>
                    <Button variant='btn btn-success my-3'>See Details <i class="fas fa-arrow-alt-right"></i></Button>
                </Link>
            </Card>
        </Col>
    );
};

export default SingleService;