import React from 'react'
import image from "../assets/image1.avif"
const Card2 = () => {
  return (
    <div className='w-full h-30 bg-blue-700 p-2 '> 
        <div className='w-[60%] h-full bg-red-500 flex gap-5 '>
    <div className='w-[60%] h-full overflow-hidden rounded-lg '>
        <img src={image} alt=" The Image" className='object-cover' />
    </div>
    <div className=' w-[40%] flex flex-col h-full  gap-5 '>

        <div className='text-lg text-blue-500 font-semibold '> Pancake</div>

        <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </div>
        <div></div>
    </div>


        </div>
        <div></div>

    </div>
  )
}

export default Card2