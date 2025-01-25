import React from 'react'

const ShopItem = ({im, name, desc, price}) => {
  return (
    <div className='bg-stone-800 flex flex-col gap-2 max-w-80 p-8 justify-center items-center ease-in-out rounded-md duration-200 shopitem'>
        <img src={im} className='w-60'/> 
        <h1 className='text-orange-300 font-bold'>{name}</h1>
        <p className='text-justify text-sm text-gray-200'>{desc}</p>
        <span className='font-bold text-lg mt-2'>{price}</span>
    </div>
  )
}

export default ShopItem