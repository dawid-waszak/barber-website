import React from 'react'
import Card from './Card'
import Title from './Title'

const Services = () => {
  return (
    <div id="services" className='relative min-h-[900px] py-32 px-4 flex flex-col'>
        <div className='bg services-bg'></div>
        <Title name="Services"/>
        {/* CARDS */}
        <div className='w-full flex flex-wrap items-center justify-center gap-20 mt-32'>
          <Card 
            icon=""
            im="./src/assets/scissors.png" 
            name="Classic Haircut" 
            description="Enjoy a precise and tailored haircut that suits your unique style. Our expert barbers will ensure a clean and polished look that leaves you feeling confident."
            />
          <Card 
          icon="" 
          im="./src/assets/beard.png"
          name="Beard Trim & Shaping" 
          description="Get your beard expertly trimmed and shaped to complement your facial features. Whether it's a sharp edge or a natural look, we've got you covered."
          />
          <Card 
          icon="" 
          im="./src/assets/razor.png"
          name="The Gentleman's Package" 
          description="A full-service package including a classic haircut, beard trim, and a relaxing hot towel shave for the ultimate grooming experience."
          />
        </div>
    </div>
  )
}

export default Services