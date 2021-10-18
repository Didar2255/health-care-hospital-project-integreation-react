import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { serviceImg, serviceName, description, id } = props.service
    const url = `/SingleService/${id}`
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={serviceImg} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Link to={url}>
                    <Button variant='btn btn-success my-2'>See Details</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default SingleService;