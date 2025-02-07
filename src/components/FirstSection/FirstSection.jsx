import React from 'react'
import { Link } from 'react-router-dom'

const FirstSection = () => {
return (
    <div>
        <div className='w-full h-56  flex'>

            {/* first part */}
            {/* the photo */}
            <div className=' flex justify-end items-center h-full w-1/3'>
                <div className='w-48 h-48 rounded-full bg-black border-4 border-white'>
                    <img 
                    src="/myphoto.png" 
                    className='w-full h-full object-cover rounded-full'
                    />
                </div>
            </div>

            {/* first part */}
            {/* the photo */}

            <div className=' h-full w-full'>
                <div className='text-5xl font-bold ml-16 mt-3'>
                    Full Stack Developer
                </div>
            </div>

        </div>
    </div>
  )
}

export default FirstSection