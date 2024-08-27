import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const {title} = useLoaderData();

    return (
        <div>
            <h1>Book Now: {title}</h1>
        </div>
    );
};

export default Checkout;