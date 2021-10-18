import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./homeData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h2>This is service details : {id}</h2>

        </div>
    );
};

export default ServiceDetails;