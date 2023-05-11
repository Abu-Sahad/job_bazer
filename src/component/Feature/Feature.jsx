import { Link } from 'react-router-dom';
import './Feature.css'
const Feature = ({ job }) => {
    const { logo, job_title, company_name, location, salary, } = job
    // console.log(job)
    return (
        <div className='future-main-part-area'>
            <img className="w-70 h-70 pb-4" src={logo} alt="Logo" />
            <h2 className="text-xl pb-2 font-bold">{job_title}</h2>
            <p className="text-gray-600 mb-4">{company_name}</p>
            <div>
                <button className='future-part-button'>{job.job_type_details.job_type1}</button>
                <button className='future-part-button'>{job.job_type_details.job_type2}</button>
            </div>
            <div className='flex mt-4 mb-4'>
                <p className='me-4'>{location}</p>
                <p>{salary}</p>
            </div>
            <Link to="details" className="btn-Common inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
                View Details
            </Link>
        </div>
    );
};

export default Feature;