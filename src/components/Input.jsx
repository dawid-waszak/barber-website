import React from 'react'

const Input = ({title, placeholder}) => {
  return (
    <>
    <label>{title}</label>
    <input className='text-xl p-2 text-black bg-gray-200 resize'/>
    </>
  )
}

export default Input