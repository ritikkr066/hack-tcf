import React, { useEffect } from 'react';
import Navbar from './componenets/Navbar';
import LearnMore from './componenets/LearnMore';

const Homepage = () => {
 

  return (
    <>
    <div className='  bg-[url("./images/tcfp.png")]'>
        <Navbar/>
    <div className='w-full h-full flex flex-col md:flex-row  py-20  bg-[url("./images/tcfp.png")] ' >
       
      <div className="md:w-1/2 w-full flex flex-col justify-center py-6   ">
        <h1 className="text-3xl lg:text-5xl md:text-3xl   md:ml-12 mx-6 space-y-2  font-bold text-white">
        Experience the Fusion of Technology and Culture
        </h1>
        <h3 className='text-white mt-5 sm:mx-12 mx-6'>Join us for an unforgettable celebration of innovation and creativity</h3>

        <div className='flex justify-start items-start sm:mx-12 mx-6'>
          {/* <button className='text-gray-400 border-[2px]  border-white hover:border-blue-500 px-3 mt-5   h-10 ml-2 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white'>
            Learn More
          </button> */}
          <LearnMore/>
        </div>
      </div>
      {/* bg-[url('./images/leo1.png')] */}
     <div className="md:w-1/2 w-full flex ">
        <div className='w-full flex h-full justify-center items-center'>
            <img src='/leo1.png' width={400} height={400} alt='img' />
        </div>
     </div>
    </div>
    </div>
    </>
  );
};

export default Homepage;
