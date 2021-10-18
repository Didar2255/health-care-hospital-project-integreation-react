import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/Banner/banner_physicians.jpg'
import img2 from '../../Images/Banner/doctors-banner.jpg'
import img3 from '../../Images/Banner/banner-img4.jpg'
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
                        <div>
                            <h2 className='text-dark'>Extra Care of all pataint</h2>
                            <h1 className='text-dark'> Happy health Happy World !!</h1>
                        </div>
                        <div></div>
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
                        <div>
                            <h2 className='text-dark' >Help all kind of People</h2>
                            <h1 className='text-dark' >Medical work </h1>
                        </div>
                        <div className=""></div>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;