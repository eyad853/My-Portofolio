import React from 'react'

const F_SecondProjectBody = () => {
  return (
    <div className='w-full min-h-screen flex p-5'>
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
        <img src="/images/projects_images/Front_end_projects/secondproject/firstImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
          <img src="/images/projects_images/Front_end_projects/secondproject/secondImage.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
 
        <div className='w-48 h-56 mt-5'>
        This weather app provides real-time weather updates with a sleek and modern interface, offering detailed forecasts and weather conditions.
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-96 bg-white mt-4'>
        <img src="/images/projects_images/Front_end_projects/secondproject/biggestImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/Front_end_projects/secondproject/leftbox.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/Front_end_projects/secondproject/rightbox.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
      </div>

      <div className='w-120 h-52 relative bg-gradient-to-tl from-slate-600 to-slate-900 mt-10 rounded-2xl'>
            <div className='absolute inset-3'>
              <p className='mb-2 mt-2'>Users can view current temperature, humidity levels, and weather warnings, ensuring they stay prepared for any conditions.</p>
              <p className='mt-2'>The app includes hourly and weekly forecasts, displayed in an organized and easy-to-read format for better planning.</p>
              <p className='mt-2'>With a visually appealing design and accurate data, this project enhances the user experience for checking weather updates.</p>
            </div>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  flex justify-center items-center text-white'>
          <p className=''>
          Search for cities to view weather data in a clean, responsive design, without any API integration.
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
        <img src="/images/projects_images/Front_end_projects/secondproject/fifthImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-2'>
          A frontend-only weather app built with React and Tailwind CSS, displaying weather details like temperature and humidity for user-input locations.
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

export default F_SecondProjectBody