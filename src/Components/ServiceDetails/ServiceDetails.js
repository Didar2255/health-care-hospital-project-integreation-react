import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>This is service details : {id}</h2>

        </div>
    );
};

export default ServiceDetails;