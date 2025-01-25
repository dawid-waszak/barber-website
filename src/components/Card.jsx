import React from 'react'

const Card = ({icon="", name, description, im=""}) => {
  return (
    <div className='w-[350px] min-h-[350px] bg-stone-600 flex flex-col items-center py-10 px-4 gap-2'>
        <i className={`text-5xl text-orange-300 ${icon}`}></i>
        {im != "" ? 
        (
        <img src={im} width="60px"/>) : "" }
        <h1 className='text-2xl font-bold mt-4 text-center'>{name}</h1>
        <p className='text-md mt-3 text-center '>{description}</p>
    </div>  
  )
}

export default Card