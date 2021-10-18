import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Service.css'

const Service = (props) => {
    const { serviceName, serviceImg, rating, price } = props.service
    return (
        <Col>
            <Card className='card'>
                <Card.Img variant="top" src={serviceImg} />
                <Card.Body className='bg-light'>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        <div className="d-flex align-items-center justify-content-between">
                            <p>Price : </p>
                            <span> $ {price}</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h6>Rating :</h6>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon"
                                fullSymbol="fas fa-star icon"
                                readonly
                            />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;