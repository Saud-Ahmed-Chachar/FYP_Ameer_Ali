import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
    const [show, setShow] = useState(false);

    return (
        <div className="overflow-y-hidden">
            {/* Code block starts */}
            <dh-component>
                <nav className="w-full border-b">
                    <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                        <div aria-label="Home. logo" role="img">
                            <img className="w-12 md:w-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg" alt="logo" />
                        </div>
                        <div>
                            <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                                <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            </button>
                            <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                                <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                                    <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </button>
                                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                    <li className="text-gray-700 hover:text-indigo-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                        <a href="/" className="hover:underline">Home</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-indigo-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="/universities" className="hover:underline">Universities</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-indigo-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="/admission" className="hover:underline">Admission</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-indigo-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="/scholarships" className="hover:underline">Scholarships</a>
                                    </li>
                                    <li className="text-gray-700 hover:text-indigo-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                        <a href="/about" className="hover:underline">About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex alight-items-left">
                            <Link to="/login"> {/* Use Link component to navigate to the LoginForm component */}
                                <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-indigo-700 text-white transition duration-150 ease-in-out hover:bg-white hover:text-indigo-700 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm mr-2">Sign In</button>
                            </Link>
                            <Link to="/signup">
                                <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-indigo-700 hover:text-white rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Register</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </dh-component>
            {/* Code block ends */}
        </div>
    );
}

export default Header;
