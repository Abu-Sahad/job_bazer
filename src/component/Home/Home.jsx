import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import './Home.css'
import image from '../../../image/banner.png'
const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <div className="md:bg-[#E5E7EB]">
                <div className="flex flex-col md:flex-row pt-20">
                    <div className="md:w-1/2 md:pr-8 mt-20" id="header-context">
                        <h1 className="text-5xl font-bold mb-6 " id="header-tittle">
                            Bangladeshi Entry Level Remote Jobs-{" "}
                            <span className="header-tittle text-blue-500">Know Here!</span>{" "}
                        </h1>
                        <p className="mb-4">
                            There’s no hiding from the fact that getting into a Merit America Entry
                            Level Remote
                        </p>
                        <div className="text-center mt-16 lg:text-left">
                            <Link to="#" className="btn-Common inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="sm: ms-10 md:w-1/2 sm:me-10 md:h-auto md:me-32" id="header-img" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
            </div>
            <div>
                {/* <div className="job-content-area">
                    <h1 className="text-center mt-32 mb-4 text-4xl font-bold">Job Category List</h1>
                    <p className="text-center mt-4 mb-20">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div> */}
                <div className="common-content">
                    <h1 className="job-tittle">Job Category List</h1>
                    <p className="job-description">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className=" ms-32 mb-10 grid grid-cols-1 md:grid-cols-4 gap-4 me-32">
                    {
                        jobs.map(job => <Banner
                            key={job.id}
                            job={job}
                        ></Banner>)
                    }
                </div>
            </div>
            <div>
                <div className="common-content">
                    <h1 className="job-tittle">Featured Jobs</h1>
                    <p className="job-description">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <Features></Features>
            </div>

        </div>
    );
};

export default Home;