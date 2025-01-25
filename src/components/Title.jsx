import React from 'react'

const Title = ({name}) => {
  return (
    <>
        <h1 className='text-3xl font-bold md:text-4xl md:ml-20 xl:ml-60'>{name}</h1>
        <h1 className='text-3xl font-bold md:text-4xl md:ml-20 xl:ml-60 text-orange-300'>﹁</h1>
    </>
  )
}

export default Title