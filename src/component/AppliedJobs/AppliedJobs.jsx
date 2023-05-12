// import { getShoppingCart } from '../../utilities/fakedb';
// import { MapPinIcon, CurrencyDollarIcon, BarsArrowDownIcon } from '@heroicons/react/24/solid'
// import './AppliedJobs.css'

// const AppliedJobs = () => {
//     const shoppingCart = getShoppingCart();
//     const cartItems = Object.entries(shoppingCart);
//     return (
//         <div>
//             <div>
//                 <h1 className='applied-job-details-tittle md:bg-[#E5E7EB]'>Applied Job</h1>
//             </div>
//             <div className='applied-button-component'>
//                 <button>
//                     Filter By
//                     <BarsArrowDownIcon className="h-6 w-6 text-blue-500 ms-2" />
//                 </button>
//             </div>

//             {cartItems.map(([id, { job }]) => (
//                 <div key={id}>
//                     <div className='applied-component-area'>


//                         <div className='applied-job-logo'>
//                             <img className="w-70 h-70 pb-4" src={job?.logo} alt="Logo" /><img src="" alt="" />
//                         </div>
//                         <div>
//                             <h2 className='applied-job-name'>{job?.job_title}</h2>
//                             <h2 className='applied-company-name'>{job?.company_name}</h2>
//                             <div className='pt-4'>
//                                 <button className='future-part-button'>{job.job_type_details.job_type1}</button>
//                                 <button className='future-part-button'>{job.job_type_details.job_type2}</button>
//                             </div>
//                             <div className='flex mt-4 mb-4'>
//                                 <MapPinIcon className="h-6 w-6 text-blue-500" />
//                                 <p className=' applied-job-common-style me-4'> Address:{job?.location}</p>
//                                 <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
//                                 <p className='applied-job-common-style '> Salary:{job?.salary}</p>
//                             </div>
//                         </div>
//                         <div>
//                             <button className="btn-Common inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
//                                 View Details
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AppliedJobs;


import { getShoppingCart } from '../../utilities/fakedb';
import { MapPinIcon, CurrencyDollarIcon, BarsArrowDownIcon } from '@heroicons/react/24/solid'
import './AppliedJobs.css'
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const shoppingCart = getShoppingCart();
    const cartItems = Object.entries(shoppingCart);
    return (
        <div>
            <div>
                <h1 className='applied-job-details-tittle md:bg-[#E5E7EB]'>Applied Job</h1>
            </div>
            <div className='applied-button-component'>
                <button>
                    Filter By
                    <BarsArrowDownIcon className="h-6 w-6 text-blue-500 ms-2" />
                </button>
            </div>

            {cartItems.map(([id, { job }]) => (
                <div key={id}>
                    <div className='applied-component-area'>
                        {/* <h2>{job?.job_title}</h2>
                        <p>{job?.job_description}</p>
                        <p>Quantity: {quantity}</p> */}

                        <div className='applied-job-logo'>
                            <img className="w-70 h-70 pb-4" src={job?.logo} alt="Logo" /><img src="" alt="" />
                        </div>
                        <div>
                            <h2 className='applied-job-name'>{job?.job_title}</h2>
                            <h2 className='applied-company-name'>{job?.company_name}</h2>
                            <div className='pt-4'>
                                <button className='future-part-button'>{job.job_type_details.job_type1}</button>
                                <button className='future-part-button'>{job.job_type_details.job_type2}</button>
                            </div>
                            <div className='flex mt-4 mb-4'>
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                <p className=' applied-job-common-style me-4'> Address:{job?.location}</p>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                <p className='applied-job-common-style '> Salary:{job?.salary}</p>
                            </div>
                        </div>
                        <div>
                            <Link
                                to={`/details/${id}`}
                                className="btn-Common inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppliedJobs;
