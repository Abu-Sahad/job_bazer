import { Link } from "react-router-dom";
import './Header.css'
import image from '../../../image/banner.png'

const Header = () => {
    return (
        <div className="bg-[#E5E7EB]">
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
            <div className="flex flex-col md:flex-row mt-10">
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


    );
};

export default Header;