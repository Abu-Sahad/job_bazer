
import './Banner.css'
const Banner = ({ job }) => {
    const { name, job_remaining, logo } = job;
    return (

        <div className=" bg-white rounded-lg p-4 shadow-md"  id="job-remaining">
            <img className="w-70 h-70 pl-10 pt-10 pb-10" src={logo} alt="Logo" />
            <h2 className="text-xl pb-2 font-bold">{name}</h2>
            <p className="text-gray-600">{job_remaining}</p>
        </div>
    );
};

export default Banner;