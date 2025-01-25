import React, { useState } from 'react'
import Title from './Title'
import Input from './Input';

const Contact = () => {
    const [name, setName] = useState("");
  return (
    <div id="contact" className='relative py-48 overflow-hidden px-4'>
        <div className='bg contact-bg'></div>
        <div className='flex flex-col justify-center items-center bg-stone-800 max-w-[800px] m-auto p-8'>
            <h1 className='text-orange-400 font-bold text-3xl'>Contact us!</h1>
            <form className='m-auto flex flex-col justify-center gap-1 w-full'>
                <Input title="Name" />
                <Input title="Email" />
                <label>Message</label>
                <textarea className='text-xl p-2 text-black bg-gray-200 resize' rows="6"/>
                <input type="submit" value="Send" className='m-auto bg-orange-400 px-20 p-2 rounded-md mt-6 hover:bg-orange-500 ease-in-out duration-200 hover:cursor-pointer'/>
            </form>
        </div>
    </div>
  )
}

export default Contact