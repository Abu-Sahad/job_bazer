import { Link } from "react-router-dom";
import './Header.css'
// import image from '../../../image/banner.png'

const Header = () => {
    return (
        <div className="md:bg-[#E5E7EB]">
            <nav className="flex pt-10 items-center justify-between flex-wrap p-6">
                <div className=" nav-tittle flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-bold text-3xl text-[#020617] tracking-tight lg:pl-6">Job Hut</span>
                </div>
                {/* <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-200 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" /></svg>
                </button>
             </div> */}
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto justify-center">
                    <div className="text-md lg:flex-grow text-gray-200 text-center">
                        <Link to="/" className="block mt-4 text-[#757575] lg:inline-block lg:mt-0 mr-4">
                            Home
                        </Link>
                        <Link to="/statistics" className="block mt-4 text-[#757575] lg:inline-block lg:mt-0 mr-4">
                            Statistics
                        </Link>
                        <Link to="/applied-jobs" className="block mt-4 text-[#757575] lg:inline-block lg:mt-0 mr-4">
                            Applied Jobs
                        </Link>
                        <Link to="/blog" className="block mt-4  text-[#757575] lg:inline-block lg:mt-0 mr-4">
                            Blog
                        </Link>
                    </div>
                    <div className=" button-class text-center mr-32 lg:text-left">
                        <Link to="#" className="btn-Common">
                            Start Applying
                        </Link>
                    </div>
                </div>
            </nav>

        </div>


    );
};

export default Header;