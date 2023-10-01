import React from 'react';

const PrevEvent = () => {
  return (
    <>
      <div className='bg-purple-950 text-white h-full w-full py-8 '>
          
            <div className='flex justify-center items-center font-bold text-3xl'>Previous Events</div>
            <div className='flex justify-center items-center py-4'>Experience the excitement of our past events</div>
            <div className='w-full h-full flex px-8 md:flex-row flex-col'>
                <div className='md:w-1/2  w-full justify-center items-center flex'>
                    <div className="bg-gray-200 my-4 mx-2  w-[90vw] h-[50vw] md:h-[50vw] "></div>
                </div>
                <div className='md:w-1/2 w-full px-8 flex flex-col justify-center items-center'>
                            <div className="bg-gray-200 flex  my-4 w-full h-[40vw] sm:h-[23vw] "> </div>
                            <div className="bg-gray-200 flex  my-4  w-full h-[40vw] sm:h-[23vw] "> </div>
                </div>
            </div>
      </div>
    </>
  );
}

export default PrevEvent;
