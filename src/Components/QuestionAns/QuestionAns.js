import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import img from '../../Images/Doctor/young-doctor-supporting-his-patient.jpg'
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div>
            <div className="row d-flex align-items-center justify-content-center my-5 bg-light p-3 rounded">
                <div className="col-md-6">
                    <img src={img} className='img-fluid rounded' alt="" />
                </div>
                <div className="col-md-6 ">
                    <h1>What is your Question ?</h1>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='text-danger fw-bold'>01.</span> <span className='fw-bolder'>How long dose take my check-up test ?</span></Accordion.Header>
                            <Accordion.Body>
                                Usually we try to do as much as possible so that our patients does not have any difficult and provides prompt treatment.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='fw-bold'><span className='text-danger fw-bold'>02.</span><span className='fw-bolder'>How many people will be take treatment at a time ?</span> </Accordion.Header>
                            <Accordion.Body>
                                There are huge people are take treatment in our hospital.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='text-danger fw-bold'>03.</span><span className='fw-bolder'>Can I take batter treatment in next day?</span></Accordion.Header>
                            <Accordion.Body>
                                Sure !! Patient is our gust,So we try to provide our best Service.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><span className='text-danger fw-bold'>04.</span><span className='fw-bolder'>How Long am I contagious when I have the flu or a cold?</span></Accordion.Header>
                            <Accordion.Body>
                                As Long as you have symptoms.Your ability to spread these viruses remains until the last sniffle.And you're contagious 24 hours before you first show symptoms.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Button className='button'>More Information is Here <i class="far fa-arrow-alt-circle-right"></i> </Button>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default QuestionAns;