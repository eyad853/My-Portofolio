import React, { useState } from 'react'
import ImagesModal from '../../ImagesModal/ImagesModal'

const ProjectBody = ({
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    firstVideo,
    secondVideo,
    thirdVideo,
    firstImageText,
    secondImageText,
    thirdImageText,
    fourthImageText,
    firstVideoText,
    secondVideoText,
    thirdVideoText,
    note,
    noteText
}) => {

    const [isModalOpen , setIsModalOpen]=useState(false)
    const [imageSrc , setImageSrc]=useState("")

    
return (
    <div className='w-full h-full'>
        <div className='h-full flex'>
            <div className=' h-full w-2/3 flex flex-col items-center justify-around gap-7 p-20'>

                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60 rounded-2xl p-10 flex items-center'>
                    <div className='w-full h-full '>
                        {firstImageText}
                    </div>
                </div>

                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60  rounded-2xl p-10 flex items-center'>
                    <div className='w-full h-full '>
                        {secondImageText}
                    </div>
                </div>

                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60 rounded-2xl p-10  flex items-center'>
                    <div className='w-full h-full '>
                        {thirdImageText}
                    </div>
                </div>

                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60  rounded-2xl p-10 flex items-center'>
                    <div className='w-full h-full '>
                        {fourthImageText}
                    </div>
                </div>
                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60 mt-20 rounded-2xl p-10 flex items-center'>
                    <div className='w-full h-full '>
                        {firstVideoText}
                    </div>
                </div>

                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60  rounded-2xl p-10 flex items-center'>
                    <div className='w-full h-full '>
                        {secondVideoText}
                    </div>
                </div>

                <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60  rounded-2xl p-10 flex items-center'>
                    <div className='w-full h-full '>
                        {thirdVideoText}
                    </div>
                </div>

                {note?(
                    <div className='bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-60  rounded-2xl p-10 flex items-center'>
                        <span className='block'>
                        {noteText}
                        </span>
                    </div>
                ):null}

            </div>  

            <div className=' h-full w-1/3 flex flex-col items-center justify-around gap-7 py-20'>
            {/* photos */}

                <div 
                onClick={()=>{
                    setIsModalOpen(true)
                    setImageSrc(`${firstImage}`)
                }}
                className=' relative bg-gradient-to-tl from-slate-600 to-slate-900 w-60 h-60 hover:w-64 hover:h-64 transition-all duration-200 rounded-2xl overflow-hidden'>
                    <img 
                    src={firstImage} 
                    className='w-full h-full absolute inset-0 rounded-2xl  ' />
                </div>

                <div 
                onClick={()=>{
                    setIsModalOpen(true)
                    setImageSrc(`${secondImage}`)
                }}
                className=' relative bg-gradient-to-tl from-slate-600 to-slate-900 w-60 h-60 hover:w-64 hover:h-64 transition-all duration-200 rounded-2xl '>
                    <img 
                    src={secondImage} 
                    className='w-full h-full absolute inset-0 rounded-2xl  ' />
                </div>

                <div 
                onClick={()=>{
                    setIsModalOpen(true)
                    setImageSrc(`${thirdImage}`)
                }}
                className=' relative bg-gradient-to-tl from-slate-600 to-slate-900 w-60 h-60 hover:w-64 hover:h-64 transition-all duration-200 rounded-2xl '>
                    <img 
                    src={thirdImage}  
                    className='w-full h-full absolute inset-0 rounded-2xl  ' />
                </div>

                <div 
                onClick={()=>{
                    setIsModalOpen(true)
                    setImageSrc(`${fourthImage}`)
                }}
                className=' relative bg-gradient-to-tl from-slate-600 to-slate-900 w-60 h-60 hover:w-64 hover:h-64 transition-all duration-200 rounded-2xl '>
                    <img 
                    src={fourthImage} 
                    className='w-full h-full absolute inset-0 rounded-2xl ' />
                </div>

                {/* videos */}
                <div className='relative bg-gradient-to-tl from-slate-600 to-slate-900 w-72 h-60 hover:w-80 hover:h-64 transition-all duration-200 rounded-2xl mt-20 '>
                    <video 
                    controls 
                    autoPlay
                    muted 
                    loop  
                    className='w-full h-full absolute inset-0 rounded-2xl object-cover'>
                        <source src={firstVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='relative bg-gradient-to-tl from-slate-600 to-slate-900 w-72 h-60 hover:w-80 hover:h-64 transition-all duration-200 rounded-2xl '>
                    <video  
                    controls 
                    autoPlay
                    muted 
                    loop 
                    className='w-full h-full absolute inset-0 rounded-2xl object-cover'>
                        <source src={secondVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='relative bg-gradient-to-tl from-slate-600 to-slate-900 w-72 h-60 hover:w-80 hover:h-64 transition-all duration-200 rounded-2xl '>
                    <video 
                    controls 
                    autoPlay
                    muted 
                    loop 
                    className='w-full h-full absolute inset-0 rounded-2xl object-cover'>
                        <source src={thirdVideo} type="video/mp4" />
                    </video>
                </div>

            
            </div>
        </div>

        <ImagesModal 
        isModalOpen={isModalOpen}
        imageSrc={imageSrc}
        setIsModalOpen={setIsModalOpen}
        />
    </div>
)
}

export default ProjectBody