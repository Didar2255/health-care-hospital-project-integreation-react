import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = (props) => {
    console.log(props.service)
    const { serviceImg, serviceName, description, id } = props.service
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
            </Card>
        </Col>
    );
};

export default SingleService;