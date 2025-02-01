import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProjectsPages from '../../components/ProjectsPages/ProjectsPages'
import { div } from 'framer-motion/client'

const Projects = () => {
  return (
    
<div className='text-white overflow-hidden '>
    <div className='w-full h-full bg-[url("/bg.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <ProjectsPages />
    </div>
</div>
  )
}

export default Projects