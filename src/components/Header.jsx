import React, { useState } from 'react'

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
    <div className='fixed top-0 w-full h-24 px-4 sm:px-8 md:px-12 xl:px-72 bg-black bg-opacity-80 flex items-center justify-between z-50'>
        {/* LOGO */}
        <div className=''>
            <a href='#home' className='text-3xl font-bold text-white hover:text-orange-300 ease-in-out duration-500'>Blade & Beard</a>
        </div>
        {/* NAV */}
        <div className='items-center gap-8 lg:gap-14 hidden sm:flex'>
            <a href='#about' className='text-base md:text-2xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>About</a>
            <a href='#services' className='text-base md:text-2xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>Services</a>
            <a href='#shop' className='text-base md:text-2xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>Shop</a>
            <a href='#contact' className='text-base md:text-2xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>Contact</a>
        </div>
        <button onClick={() => setMobile(prev => !prev)} className='sm:hidden'>
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
    </div>
    {/* MOBILE NAV */}
    <div className={`sm:hidden`}>
      <div className={`fixed h-[calc(100vh-96px)] w-full bg-black bg-opacity-80 top-24 flex flex-col z-50 justify-center items-center gap-8 ease-in-out duration-500 ${mobile ? "-right-0" : "-right-[100%]"}`}>
        <a href='#about' onClick={() => setMobile(prev => prev=false)} className='text-xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>About</a>
        <a href='#services' onClick={() => setMobile(prev => prev=false)} className='text-xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>Services</a>
        <a href='#shop' onClick={() => setMobile(prev => prev=false)} className='text-xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>Shop</a>
        <a href='#contact' onClick={() => setMobile(prev => prev=false)} className='text-xl font-medium text-white hover:text-orange-300 ease-in-out duration-500'>Contact</a>
      </div>
    </div>
  </>
  )
}

export default Header