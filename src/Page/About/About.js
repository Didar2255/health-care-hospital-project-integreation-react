import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about-title my-5'>
            <Container>
                <h2>About Doctor's point Hospital</h2>
                <p>Doctor's point Hospital is an national standard hospital with the facilities of 05 ‘Centers of Excellence’. The ‘Center of Excellences’ are Gastro Liver Center, Mother & Child Care Center, Brain & Spine Center, Nephrology & Urology Center, Bone & Joint Center and other most modern ancillary & specialized Services supported by Internal Medicine, Cardiology, Respiratory Medicine, Gastrointestinal & Hepatobiliary Surgery, Hepato-Biliary-Pancreatic-Surgery Medical Oncology, Endocrinology & Diabetology, General & Laparoscopic Surgery, Hematology/Transfusion Medicine, ENT Head & Neck Surgery, Plastic & Reconstructive Surgery, Physiotherapy & Rehabilitation, Dermatology, Physical Medicine and Lab Medicine.</p>
                <p>
                    Doctor's point Hospital has been established by BRB group in 2014 to provide exceptional and outstanding medical services support to the community. Starting its operation in brand new facility with an international standard ‘Go Green Healthcare’ concept, to improve the patients services with a protection for health as well as the environment and the beneficial outcomes with green-sustainable models in Bangladesh. This is the first hospital in Bangladesh that committed to the continuum of Eco-Healthcare (Patient & Community) and facilitating change in behavior that can drastically improve the environmental burdens attributable to healthcare while improving patient outcomes.
                </p>
            </Container>
        </div>
    );
};

export default About;