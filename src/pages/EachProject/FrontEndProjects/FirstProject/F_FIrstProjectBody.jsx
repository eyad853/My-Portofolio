import React from 'react'

const F_FIrstProjectBody = () => {
  return (
    <div className='w-full min-h-screen flex p-5'>
    {/* first part */}
    <div className=' min-h-screen w-64 flex justify-between flex-col items-center'>
      {/* title */}
      <div className='ml-1 border-b pb-10 border-gray-400 '>
        <h1 className='text-[#A1A1AA] text-6xl'>
          <p>PROJECT</p>
          <p className='ml-2'>DETAILS</p>
        </h1>
      </div>
        {/* firs box */}
      <div className='w-80 relative rounded-2xl h-52 transform rotate-45  mt-10 bg-slate-400'>
        <img src="/images/projects_images/Front_end_projects/firstproject/thirdImage.png" className='w-full rounded-2xl h-full ' alt="" />
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
          <img src="/images/projects_images/Front_end_projects/firstproject/fifthImage.png" className='w-full rounded-2xl h-full' alt="" />
        </div>

        <div className='w-48 h-56 mt-5'>
        This e-commerce project delivers a modern, visually appealing design with interactive product displays, making online shopping simple, engaging, and efficient for users exploring a wide variety of items.
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-96 bg-white mt-4'>
         <img src="/images/projects_images/Front_end_projects/firstproject/biggest_project.png" className='w-full h-full rounded-2xl' alt="" />
      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/Front_end_projects/firstproject/leftbox.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/Front_end_projects/firstproject/rightbox.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
      </div>

      <div className='w-120 h-52 relative bg-gradient-to-tl from-slate-600 to-slate-900 mt-10 rounded-2xl'>
            <div className='absolute inset-3'>
              <p>
                With a clean, responsive layout and well-organized sections, the website offers smooth navigation, showcasing product categories, special deals, and essential shopping features.
              </p>
              <p>
                Combining style and functionality, this platform presents products elegantly while using clear call-to-action buttons, ensuring a user-friendly and streamlined shopping experience.
              </p>
              <p>
                Designed for optimal user interaction, this e-commerce site enhances product visibility with structured sections, interactive elements,
              </p>
            </div>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60 flex justify-center items-center text-white'>
          <p className=''>
          Designed for engagement, the site offers well-structured sections and an intuitive interface, perfect for showcasing products beautifully.
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
         <img src="/images/projects_images/Front_end_projects/firstproject/firstImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60 flex justify-center items-center  text-white'>
          <p className=''>
          Featuring a clean and responsive layout, the website highlights product categories, special deals, and user-friendly navigation for a smooth and enjoyable experience.
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

export default F_FIrstProjectBody