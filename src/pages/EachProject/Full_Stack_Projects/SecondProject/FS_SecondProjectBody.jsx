import React from 'react'

const FS_SecondProjectBody = () => {
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
      <div className='w-52 relative rounded-2xl flex justify-center items-center h-72 mt-10 bg-slate-400 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <p className='ml-2'>
        By combining email, Google, and GitHub login methods, this system offers a flexible and reliable authentication experience. It balances user convenience with strong security practices.
        </p>
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
          <img src="/images/projects_images/BCE&FS_projects/secondproject/sv1.png" className='w-full h-full rounded-2xl ' alt="" />
        </div>

        <div className='w-48 h-56 mt-5'>
        With Google OAuth integration, users can sign up and log in using their Google accounts. This option simplifies the process and offers a fast and secure way to access the application.
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-96 bg-white mt-4'>
      <video controls autoPlay loop src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606578/main_t5fhq4.mp4" className='w-full h-full  object-cover  rounded-2xl'></video>

      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <video controls autoPlay loop  src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606577/google_ozqdvl.mp4" className='w-full h-full rounded-2xl object-cover'></video>
        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <video controls autoPlay loop  src="https://res.cloudinary.com/dbfsq51ax/video/upload/v1741606576/github_xfseky.mp4" className='w-full h-full rounded-2xl object-cover'></video>
        </div>
      </div>

      <div className='w-120 h-52 relative bg-gradient-to-tl from-slate-600 to-slate-900 mt-10 rounded-2xl'>
            <p className='absolute inset-3'>
              This authentication project is a complete and secure user authentication system built with modern web technologies. It supports standard email and password-based registration and login, as well as social login options through Google and GitHub. With seamless OAuth integration, users can quickly sign up and sign in without the hassle of creating new credentials. The system ensures data security and a smooth user experience, making it ideal for any web application requiring robust authentication.
            </p>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-1'>
          The project includes GitHub OAuth login, enabling users to authenticate with their GitHub accounts. This feature is especially useful for developers and tech-based platforms.
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
          <img src="/images/projects_images/BCE&FS_projects/secondproject/firstImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-0'>
          The project provides a standard email and password authentication system, allowing users to create and manage their accounts securely. It handles data validation and encryption 
          </p>
        </div>
      </div>
      {/* fourth box */}
      <div className='w-80 h-10 absolute bottom-5 flex justify-center items-center right-10 bg-sky-700 rounded-2xl'>
        <a  href="">Try The Web if U </a>
      </div>
    </div>
  </div>
  )
}

export default FS_SecondProjectBody