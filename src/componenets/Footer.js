import React from 'react'
import { BsFacebook ,BsInstagram,BsLinkedin,BsYoutube} from 'react-icons/bs';
import { RiTwitterXLine} from 'react-icons/ri';


const Footer = () => {
  return (
    <>
     {/* bg-[#AF019580] */}
      <div className='h-full w-full flex md:flex-row flex-col bg-white text-black px-6 py-8 '>
        <div className='md:w-1/2 w-full  '>
        <div className="text-black mb-4 text-[20px] flex flex-col justify-center md:items-start md:justify-start items-center ">
        <img src='/NITPlogo.png' width={80} height={90} alt='img' />
        <img src='/NITPlogo2.png' width={80} height={90} alt='img' />
        <div>Address:</div>
        <div className='mb-4'>NIT Patna,Ashok Rajpath</div>
        <div>Contact:</div>
        <div>9876543210</div>
        </div>
        <div className='flex flex-row py-4 items-center justify-center md:justify-start md:items-start'>
           <div className=''> <a href=''><BsFacebook className='w-[40px] h-[30px]'/></a></div>
           <div> <a href=''><BsInstagram className='w-[40px] h-[30px]'/></a></div>
           <div> <a href=''><BsLinkedin className='w-[40px] h-[30px]' /></a></div>
           <div> <a href=''><RiTwitterXLine className='w-[40px] h-[30px]' /></a></div>
           <div> <a href=''><BsYoutube className='w-[40px] h-[30px]' /></a></div>

        </div>
        
        </div>
        <div className='md:w-1/4 w-full py-4 grid text-xl items-center justify-center'>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
        </div>
        <div className='sm:w-1/4 py-4 w-full grid text-xl items-center justify-center'>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
            <a href=''>Linkone</a>
        </div>
      </div>
    </>
  )
}

export default Footer
