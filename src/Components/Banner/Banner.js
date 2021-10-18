import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/Banner/doctor-with-stethoscope-baby-without-clothes-examination-by-doctor.jpg'
import img2 from '../../Images/Banner/elderly-female-smiling-with-doctor-visiting-senior-patient-woman-hospital-ward.jpg'
import img3 from '../../Images/Banner/nurse-measuring-patient-blood-pressure.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade className='banner-img'>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="d-flex align-items-center justify-content-between">
                        <div></div>
                        <div>
                            <h2 className='text-dark'>The best Care </h2>
                            <h1 className='text-dark'>For Your Love Ones</h1>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="d-flex align-items-center justify-content-between">
                        <div></div>
                        <div>
                            <h2 className='text-dark'>Extra Care of all pataint</h2>
                            <h1 className='text-dark'> Happy health Happy World !!</h1>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className=""></div>
                        <div className="banner-title">
                            <h2 >Help all kind of People</h2>
                            <h1 >Medical work </h1>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;