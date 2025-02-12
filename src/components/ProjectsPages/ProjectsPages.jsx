import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsPages = () => {
  return (
    <div>
        <div className='h-[90.7vh] w-full  grid grid-cols-2 grid-rows-1 gap-10 p-8'>
            {/* first project */}
            <div className=' relative bg-slate-500 w-96 h-96 ml-56  mt-14 rounded-2xl bg-gradient-to-tl from-slate-600 to-slate-900 transform hover:scale-105 transition-all duration-200'>
              <img src="/My-Portofolio/notes.webp" className='w-full h-full rounded-2xl absolute' alt="" />
              <Link to={"/projects/firstProject"} className='absolute w-full h-full z-50'></Link>
            </div>  

            {/* second projcet */}
            <div className='relative bg-slate-500 w-96 h-96 mt-14 rounded-2xl bg-gradient-to-tl from-slate-600 to-slate-900 transform hover:scale-105 transition-all duration-200'>
            <img src="/My-Portofolio/todo.webp" className='w-full h-full rounded-2xl absolute' alt="" />
            <Link to={"/projects/secondProject"} className='absolute w-full h-full z-50'></Link>
            </div>

          

        </div>
    </div>
  )
}

export default ProjectsPages