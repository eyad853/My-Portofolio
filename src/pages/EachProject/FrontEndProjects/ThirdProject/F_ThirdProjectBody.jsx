import React from 'react'
import { Link } from 'react-router-dom'

const F_ThirdProjectBody = () => {
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
        <img src="/images/projects_images/Front_end_projects/thirdproject/svgh.png" className='w-full h-full rounded-2xl object-cover' alt="" />
      </div>

        {/* second box */}
      <div className='w-52 flex flex-col items-center rounded-2xl h-115 mt-10 bg-gradient-to-tl from-slate-600 to-slate-900'>
        <div className='w-44 h-44 bg-gray-950 rounded-2xl mt-5'>
          <img src="/images/projects_images/Front_end_projects/thirdproject/sv1.png" className='w-full h-full rounded-2xl' alt="" />
        </div>

        <div className='w-48 h-56 mt-5'>
        The login page allows users to access their accounts. After successful login, users are redirected to a protected page only accessible when authenticated.
        </div>
      </div>

    </div>

  {/* second part */}
    <div className=' flex flex-col items-center w-185 min-h-screen'>
      <div className='w-160 rounded-2xl relative h-96 bg-white mt-4'>
        <img src="/images/projects_images/Front_end_projects/thirdproject/biggestImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>

      <div className='mt-2 mb-0'>
        <h1 className='text-4xl'>
          Some Details
        </h1>
      </div>
  
      <div className='flex gap-7'>
        {/* left box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/Front_end_projects/thirdproject/svg.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
          {/* right box */}
        <div className='w-80 rounded-2xl h-80 bg-white mt-10 relative'>
          <img src="/images/projects_images/Front_end_projects/thirdproject/svf.png" className='w-full h-full rounded-2xl' alt="" />
        </div>
      </div>

      <div className='w-120 h-52 relative bg-gradient-to-tl from-slate-600 to-slate-900 mt-10 rounded-2xl'>
            <p className='absolute inset-3'>
            Authentication Methods:
            This frontend project supports both traditional email/password login and third-party authentication methods. Users can log in using their Google or GitHub accounts for quick and secure access. The app uses modern frontend techniques to handle user state and redirection, ensuring a seamless and responsive experience. Once authenticated, users are directed to a specific protected page, demonstrating successful login. This project is focused on the frontend, with no backend involved — perfect for showcasing UI and state management skills, if U want to see the full stack version of that app    
            <Link className='hover:text-blue-600 ml-2 font-bold transition-all duration-200' to="/fullstack/projects/secondProject">click here</Link>
            </p>
      </div>
    </div>

  {/* third part */}
    <div className=' relative flex-grow min-h-screen '>
      {/* first box */}
      <div className='w-44 h-64 flex justify-center items-center absolute top-24 left-3 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute inset-1'>
          The sign-up page lets users create an account by providing their basic information. It ensures smooth navigation and form validation for an easy user experience.
          </p>
        </div>
      </div>
{/* second box */}
      <div className='w-80 h-64 absolute top-96 left-3 bg-slate-500 rounded-2xl'>
        <img src="/images/projects_images/Front_end_projects/thirdproject/fifthImage.png" className='w-full h-full rounded-2xl' alt="" />
      </div>
      {/* third box */}
      <div className='w-44 h-64 absolute bottom-24 flex justify-center items-center  right-10 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl'>
        <div className='w-40 h-60  relative text-white'>
          <p className='absolute '>
          This app provides a simple and user-friendly authentication flow. It includes a sign-up page, a login page, and a protected page that users can only access after successful authentication.
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

export default F_ThirdProjectBody