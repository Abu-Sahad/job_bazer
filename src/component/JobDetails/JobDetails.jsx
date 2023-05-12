import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, PhoneIcon, InboxStackIcon, MapPinIcon } from '@heroicons/react/24/solid'
import './JobDetails.css'
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetch(`/jobhut.json`)
            .then(res => res.json())
            .then(data => {
                const jobObject = data.find(js => js.id == id);
                setJob(jobObject || null)
            })
            .catch(error => console.error(error));
    }, [id]);
    if (!job) {
        return <div>Job not found</div>;
    }
    return (
        <div className='mb-10'>
            <div>
                <h1 className='job-details-tittle md:bg-[#E5E7EB]'>Job Details</h1>
            </div>
            <div >
                {/* <h1>{job?.job_title}</h1>
                <p>{job?.location}</p>
                <p>{job?.description}</p>
                <p>{job?.requirements}</p> */}
                <div className="job-component">
                    <div className="">
                        <p className='mb-10 job-common-area'><span className='job-common-tittle'>Job Description: </span>{job?.job_description}</p>
                        <p className='mb-10 job-common-area '><span className='job-common-tittle' >Job Responsibility: </span>{job?.job_responsibility}</p>
                        <p className='mb-10 job-common-area'><span className='job-common-tittle'>Education Requirement:</span> <br />{job?.education_requirement}</p>
                        <p className='mb-10 job-common-area'><span className='job-common-tittle'>Experience:</span> <br />{job?.experience}</p>
                    </div>
                    <div>
                        <div className="job-details-section">
                            <p className="job-common-tittle pt-10 pb-6 ps-10">Job Details</p>
                            <hr />
                            <p className='ps-10 pt-6 flex items-center'>
                                <span className='job-common-tittle'>Salary:</span>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500 ml-2" />
                                <span className='ml-2'>{job?.salary}</span>
                            </p>
                            <p className='ps-10 pt-4'><span className='job-common-tittle'>Job Title:</span> {job?.job_title}</p>
                            <p className="job-common-tittle pt-10 pb-6 ps-10">Contract Information</p>
                            <hr />
                            <p className='ps-10 pt-6 flex items-center'>
                                <span className='job-common-tittle'>Phone:</span>
                                <PhoneIcon className="h-6 w-6 text-blue-500 ml-2" />
                                <span className='ml-2'>{job?.contact_info?.phone}</span>
                            </p>
                            <p className='ps-10 pt-6 flex items-center'>
                                <span className='job-common-tittle'>Email:</span>
                                <InboxStackIcon className="h-6 w-6 text-blue-500 ml-2" />
                                <span className='ml-2'>{job?.contact_info?.email}</span>
                            </p>
                            <p className='ps-10 pt-6 flex items-center'>
                                <span className='job-common-tittle'>Address:</span>
                                <MapPinIcon className="h-6 w-6 text-blue-500 ml-2" />
                                <span className='ml-2'>{job?.location}</span>
                            </p>
                        </div>
                        <div className=" mt-10 text-center">
                            <Link to="#" className="btn-Common w-full inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600" onClick={() => addToDb(id, job)}>
                                Apply Now
                            </Link>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default JobDetails;
