import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';

const Features = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobhut.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <>
            <div className='ms-32 mb-10 grid grid-cols-1 md:grid-cols-2 gap-20 me-32'>
                {
                    jobs.map(job => <Feature
                        key={job.id}
                        job={job}

                    ></Feature>)
                }
            </div>

            <div className='text-center mb-10'>
                <Link to="details" className=" btn-Common inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
                    See More
                </Link>
            </div>
        </>
    );
};

export default Features;