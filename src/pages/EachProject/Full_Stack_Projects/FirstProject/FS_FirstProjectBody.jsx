import React from 'react'

const FS_FirstProjectBody = () => {
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
      <div className='w-52 relative rounded-2xl h-80 mt-10 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <img src="/images/projects_images/BCE&FS_projects/firstproject/firstImage.png" className="w-full h-full rounded-2xl" alt="" />
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
          <img src="/images/projects_images/BCE&FS_projects/firstproject/secondImage.png" className="w-full h-full rounded-2xl" alt="" />
        </div>

        <div className='w-48 h-56 mt-5'>
        The My Tasks page serves as a central hub for all user-created tasks. It provides a clear and organized view of everything that needs to get done, helping users manage their workload efficiently.
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-75 bg-white mt-4'>
        <video autoPlay loop controls  src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606560/main_zjtraf.mp4" className='w-full h-full rounded-2xl '></video>
      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/BCE&FS_projects/firstproject/thirdImage.png" className="w-full h-full rounded-2xl" alt="" />
        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/BCE&FS_projects/firstproject/fourthImage.png" className="w-full h-full rounded-2xl" alt="" />
        </div>
      </div>

      <div className='w-120 h-52 relative bg-gradient-to-tl from-slate-600 to-slate-900 mt-10 rounded-2xl'>
            <p className='absolute inset-3'>
            This to-do app is a powerful and well-organized task management system designed to help users stay productive and on track. It features multiple pages to manage tasks efficiently, including a My Day page for daily priorities, an Important page for high-priority tasks, a My Tasks page for general task management, and a Planned page for scheduling upcoming work. With its clear structure and intuitive layout, this app ensures users can easily plan their days, prioritize what matters most, and stay on top of their goals.
            </p>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-1'>
          The Important page highlights high-priority tasks so users never lose track of what matters most. Tasks marked as important appear here for easy access and focused attention.
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
          <img src="/images/projects_images/BCE&FS_projects/firstproject/fifthImage.png" className="w-full h-full rounded-2xl" alt="" />
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-0'>
          The My Day page helps users focus on their daily priorities by allowing them to add and manage the tasks they want to complete today. It’s designed to keep users organized and productive every day.
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

export default FS_FirstProjectBody