"use client"

import React, { useState } from "react";
function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className="pb-4 pt-4 bg-gray-100 overflow-y-hidden">
            {/* Code block starts */}
            <dh-component>
                <nav className="w-full pb-3 ">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="flex items-center" aria-label="Home" role="img">
                           
                            <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800">Whitesun Farm</p>
                        </div>
                        <div className="">
                            <button onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg" alt="show" />
                            </button>
                            <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
                                <button onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3">
                                    <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg" alt="hide" />
                                </button>
                                <ul className="flex text-3xl md:text-base items-center py-3 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
                                    <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript:void(0)">Company</a>
                                    </li>
                                    <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript:void(0)">Features</a>
                                    </li>
                                    <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript:void(0)">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
               
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Index;
