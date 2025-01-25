import React from 'react'

const About = () => {
  return (
    <div id="about" className='relative overflow-hidden h-[1000px] w-full bg-stone-700 flex justify-center items-center flex-col-reverse md:flex-row'>
        <div className='h-full w-full md:w-[50%] overflow-hidden bg about-bg'>

        </div>
        <div className='py-32 px-4 sm:px-10 flex-1 flex flex-col xl:gap-4 items-center'>
            <div className='2xl:w-[600px] xl:w-[90%] flex flex-col gap-8'>
            <h1 className='text-xl font-bold sm:text-2xl md:text-3xl xl:text-5xl'>Welcome to Blade & Beard,</h1>
            <p className='text-sm text-justify text-gray-100 sm:text-[14px] md:text-base xl:text-[16px]'>
            where tradition meets modern style. Our passion for grooming goes beyond just haircuts – we strive to create an experience that leaves you looking sharp and feeling confident.

            <br/><br/>At Blade & Beard, our team of skilled barbers combines years of experience with the latest trends to provide top-notch services tailored to your unique style. Whether you're after a classic cut, a modern fade, or a perfectly groomed beard, we've got you covered.

            We believe a great haircut is more than just a service – it’s an art. <br/><br/>That’s why we take the time to understand your preferences, ensuring every detail is just right. Our welcoming atmosphere and attention to detail make us more than just a barbershop – we’re a place where you can relax, refresh, and reinvent your look.

            Join us at Blade & Beard and discover the perfect blend of craftsmanship, creativity, and care. Your style, our expertise.
            </p>
            </div>
        </div>
    </div>
  )
}

export default About