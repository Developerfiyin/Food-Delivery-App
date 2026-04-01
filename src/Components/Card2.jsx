import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

import image from "../assets/image1.avif"
const Card2 = () => {
  return (
    <div className='w-full h-30 shadow-lg p-2 flex justify-between '> 
        <div className='w-[60%] h-full  flex gap-5 '>
    <div className='w-[60%] h-full overflow-hidden rounded-lg '>
        <img src={image} alt=" The Image" className='object-cover' />
    </div>
    <div className=' w-[40%] flex flex-col h-full gap-5 '>
        <div className='text-lg text-gray-500 font-semibold'> Pancake</div>
          <div className='w-27.5 h-12.5 flex overflow-hidden rounded-lg shadow-lg font-semibold border-2 text-xl border-purple-500'>
            <button className='w-7.5 h-full bg-white text-purple-500 hover:bg-slate-400 flex items-center justify-center '>-</button>
            <span className='w-10 h-full bg-slate-200 text-purple-500  flex justify-center items-center' >1</span>
            <button className='w-7.5 h-full bg-white text-purple-500 hover:bg-slate-400 flex items-center justify-center '>+</button>
        </div>
        <div></div>
    </div>


        </div>
        <div className='flex flex-col gap-5 items-end justify-center '>
        <span className='text-xl font-semibold text-purple-500 '>$ 499 </span>
       <RiDeleteBin6Line className='h-7.5 w-7.5  text-purple-500 hover:text-red-600 cursor-pointer ' /> 
        </div>

    </div>
  )
}

export default Card2