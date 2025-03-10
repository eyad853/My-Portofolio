import React from 'react'

const FS_ThirdProjectBody = () => {
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
      <div className='w-52 relative flex justify-center items-center rounded-2xl h-80 mt-10 bg-slate-400 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <p className=''>
      This app combines simplicity and security, offering a seamless experience through its signup, login, and main pages. It's designed to keep users' notes safe and easily accessible.
        </p>
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-slate-400 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
          <img src="/images/projects_images/BCE&FS_projects/thirdproject/login.png" className='w-full h-full rounded-2xl' alt="" />
        </div>

        <div className='w-48 h-56 mt-5'>
        The Signup Page allows new users to quickly create an account, ensuring secure access to their personal notes and a smooth onboarding experience.
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-76 bg-white mt-4'>
          <video controls loop autoPlay src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606598/main_ov2l5n.mp4" className='w-full h-full rounded-2xl'></video>
      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <video 
          className='w-full h-full rounded-2xl object-cover' 
          controls 
          autoPlay 
          loop 
          src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606597/signup_txcu98.mp4"></video>
        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <video 
          className='w-full h-full rounded-2xl object-cover' 
          controls 
          autoPlay 
          loop 
          src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606596/login_dw3ca9.mp4"></video>
        </div>
      </div>

      <div className='w-120 h-52 relative bg-slate-400 bg-gradient-to-tl from-slate-600 to-slate-900 mt-10 rounded-2xl'>
            <p className='absolute inset-7'>
            This notes app is a simple and efficient platform designed to help users capture and manage their thoughts and ideas. It features a Signup Page for new users to create their accounts, a Login Page for returning users to access their notes securely, and a Main Page where all notes are created, viewed, and managed. With its clean design and user-friendly interface, this app makes it easy to stay organized and keep track of important information.
            </p>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-slate-400 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-1'>
          The Main Page is where users can create, view, edit, and delete their notes. It offers a simple and organized layout for managing all their information in one place.
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
          <img src="/images/projects_images/BCE&FS_projects/thirdproject/signup.png" className='w-full h-full rounded-2xl' alt="" />
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-slate-400 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-2'>
          The Login Page provides existing users with a secure way to access their accounts and manage their saved notes effortlessly.
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

export default FS_ThirdProjectBody