import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='flex items-center gap-5 px-2 md:justify-between md:px-10 py-2 w-full'>
      {/* Logo */}
      <div className='w-12 h-12 md:w-20 md:h-20'>
        <img src="https://img.freepik.com/free-vector/gradient-quill-pen-logo-with-tagline-template_23-2149813051.jpg" alt="" className='rounded-full'/>
      </div>

      {/* Links */}
      <div className='flex items-center gap-5'>
        <a href="#" className='text-xs md:text-base'>Home</a>
        <a href="#" className='text-xs md:text-base'>Product Information</a>
      </div>

      {/* Button */}
      <div className='hidden md:block'>
        <a href="#" className='bg-[#FEAED2] text-white px-2 py-1 md:px-5 md:py-2 rounded-full font-medium flex items-center gap-2 text-xs md:text-base'>Contact Us <FaArrowRightLong size={22} /></a>
      </div>
    </nav>
  )
}

export default Navbar