import React from 'react'

const Welcome = () => {
  
  return (
    <div id="home">
    <div className='bg background'></div>
        <div className='w-full min-h-screen flex flex-col gap-5 items-center justify-center px-2 sm:px-12 md:px-12'>
            {/* MAIN TEXT */}
            <div className='flex gap-1'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-center'>Where Style Meets Precision</h1>
            </div>
            {/* DESCRPITION */}
            <span className='lg:w-[50vw] 2xl:w-[30vw] text-xs md:text-sm text-center text-gray-200 italic'>Step into our barbershop and experience classic grooming with a modern edge. From sharp fades to tailored trims, we craft confidence one cut at a time.</span>
            <a className='bg-orange-400 hover:bg-orange-600 ease-in-out duration-500 p-3 rounded-lg w-60 text-center mt-4'>
                <button>Check our services</button>
            </a>
        </div>
    </div>
  )
}

export default Welcome