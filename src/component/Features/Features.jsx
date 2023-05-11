import { useEffect, useState } from 'react';

import Feature from '../Feature/Feature';

const Features = () => {
    const [jobs, setJobs] = useState([]);
    const [visibleJobs, setVisibleJobs] = useState(4); // initially display 4 items
    useEffect(() => {
        fetch('jobhut.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const handleSeeMore = () => {
        setVisibleJobs(prevCount => prevCount + 4); // display 4 more items on button click
    };

    return (
        <>
            <div className='ms-32 mb-10 grid grid-cols-1 md:grid-cols-2 gap-20 me-32'>
                {
                    jobs.slice(0, visibleJobs).map(job => (
                        <Feature
                            key={job.id}
                            job={job}
                        ></Feature>
                    ))
                }
            </div>

            {visibleJobs < jobs.length && (
                <div className='text-center mb-10'>
                    <button onClick={handleSeeMore} className="btn-Common inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
                        See All Jobs
                    </button>
                </div>
            )}
        </>
    );
};

export default Features;
