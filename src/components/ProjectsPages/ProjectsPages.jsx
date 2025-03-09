import React from 'react'
import { Link } from 'react-router-dom'
import ProjectWay from '../Projectway/ProjectWay'

const ProjectsPages = () => {
  return (
    <div>
        <div className='h-full w-full p-16'>
          {/* first container */}
            <div className='Front-end-container'>
              <div className='w-screen  '>
                <p className='text-3xl font-bold'>
                  Front-End Projects
                </p>
              </div>

              <div className='flex justify-center h-64  w-full mr-44 mt-10'>
                <ProjectWay image="/images/projects_images/general_images/E-commerce.webp" link="/frontend/projects/firstProject"/>
                <ProjectWay image="/images/projects_images/general_images/weather.webp" link="/frontend/projects/secondProject"/>
                <ProjectWay image="/images/projects_images/general_images/authentication.webp" link="/frontend/projects/thirdProject"/>
              </div>
            </div>

            {/* second container */}
            <div className='back-end-container mt-16'>
              <div className='w-screen  '>
                <p className='text-3xl font-bold'>
                  Back_End / Full Stack Projects
                </p>
              </div>

              <div className='flex justify-center h-64  w-full mr-44 mt-10'>
                <ProjectWay image="/images/projects_images/general_images/todo.webp" link="/fullstack/projects/firstProject"/>
                <ProjectWay image="/images/projects_images/general_images/authentication.webp" link="/fullstack/projects/secondProject"/>
                <ProjectWay image="/images/projects_images/general_images/notes.webp" link="/fullstack/projects/thirdProject"/>
              </div>
            </div>



        </div>
    </div>
  )
}

export default ProjectsPages