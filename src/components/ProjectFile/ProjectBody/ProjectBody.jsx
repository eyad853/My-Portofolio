import React, { useState } from 'react'
import ImagesModal from '../../ImagesModal/ImagesModal'

const ProjectBody = ({
  firstImageCheck,
  secondImageCheck,
  thirdImageCheck,
  fourthImageCheck,
  fifthImageCheck,
  firstVideoCheck,
  secondVideoCheck,
  thirdVideoCheck,
  fourthVideoCheck,
  fifthVideoCheck,
  firstVideo_theBiggestVideo,
  secondVideo,
  thirdVideo,
  firstimage,
  secondImage,
  thirdImage,
  firstText,
  secondText,
  thirdText,
  fourthText,
  biggestImageCheck,
  biggestVideoCheck,
  biggestImage,
  biggestVideo
}) => {

    const [isModalOpen , setIsModalOpen]=useState(false)
    const [imageSrc , setImageSrc]=useState("")

    
return (
  <div className='w-full min-h-screen flex'>
    {/* first part */}
    <div className=' min-h-screen w-64 flex flex-col items-center'>
      {/* title */}
      <div className='ml-1 border-b pb-10 border-gray-400 '>
        <h1 className='text-[#A1A1AA] text-6xl'>
          <p>PROJECT</p>
          <p className='ml-2'>DETAILS</p>
        </h1>
      </div>
        {/* firs box */}
      <div className='w-52 relative rounded-2xl h-80 mt-10 bg-slate-400'>
        {firstImageCheck?(
          <div className={`w-full h-full absolute `}>
            <img src={firstimage} className='w-full h-full rounded-2xl object-contain' alt="" />
          </div>
        ):null}

        {firstVideoCheck?(
          <div className={`w-full h-full absolute `}>
            <video src={secondVideo} className='w-full h-full rounded-2xl object-contain' alt={null} />
          </div>
        ):null}
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-slate-400'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
            {secondImageCheck?(
              <div className={`w-full h-full absolute `}>
                <img src={firstimage} className='w-full h-full rounded-2xl object-contain' alt="" />
              </div>
            ):null}

            {secondVideoCheck?(
              <div className={`w-full h-full absolute `}>
                <video src={secondVideo} className='w-full h-full rounded-2xl object-contain' alt={null} />
              </div>
            ):null}
        </div>

        <div className='w-48 h-56 mt-5'>
          {firstText}
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-96 bg-white mt-4'>
            {biggestImageCheck?(
              <div className={`w-full h-full absolute `}>
                <img src={biggestImage} className='w-full h-full rounded-2xl object-contain' alt="" />
              </div>
            ):null}

            {biggestVideoCheck?(
              <div className={`w-full h-full absolute `}>
                <video src={biggestVideo} className='w-full h-full rounded-2xl object-contain' alt={null} />
              </div>
            ):null}
      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
            {thirdImageCheck?(
              <div className={`w-full h-full absolute `}>
                <img src={secondImage} className='w-full h-full rounded-2xl object-contain' alt="" />
              </div>
            ):null}

            {thirdVideoCheck?(
              <div className={`w-full h-full absolute `}>
                <video src={secondVideo} className='w-full h-full rounded-2xl object-contain' alt={null} />
              </div>
            ):null}

        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
            {fourthImageCheck?(
              <div className={`w-full h-full absolute `}>
                <img src={secondImage} className='w-full h-full rounded-2xl object-contain' alt="" />
              </div>
            ):null}

            {fourthVideoCheck?(
              <div className={`w-full h-full absolute `}>
                <video src={secondVideo} className='w-full h-full rounded-2xl object-contain' alt={null} />
              </div>
            ):null}

        </div>
      </div>

      <div className='w-120 h-52 relative bg-blue-900 mt-10 rounded-2xl'>
            <p className='absolute inset-3'>
              {secondText}
            </p>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-green-300 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-2'>
            {thirdText}
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
          {fifthImageCheck?(
              <div className={`w-full h-full absolute `}>
                <img src={firstimage} className='w-full h-full rounded-2xl object-contain' alt="" />
              </div>
            ):null}

            {fifthVideoCheck?(
              <div className={`w-full h-full absolute `}>
                <video src={secondVideo} className='w-full h-full rounded-2xl object-contain' alt={null} />
              </div>
            ):null}
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-orange-500 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-2'>
            {fourthText}
          </p>
        </div>
      </div>
      {/* fourth box */}
      <div className='w-80 h-10 absolute bottom-5 flex justify-center items-center right-10 bg-sky-700 rounded-2xl'>
        <a  href="">Try The Web if U want</a>
      </div>
    </div>
  </div>
)
}

export default ProjectBody