import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import './Home.css'
const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
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