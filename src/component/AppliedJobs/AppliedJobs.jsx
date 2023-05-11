import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';


const AppliedJobs = () => {
    const shoppingCart = getShoppingCart();
    const cartItems = Object.entries(shoppingCart);
    return (
        <div>
            <h1>Applied Jobs:</h1>
            {cartItems.map(([id, { job, quantity }]) => (
                <div key={id}>
                    <h2>{job?.job_title}</h2>
                    <p>{job?.job_description}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default AppliedJobs;
