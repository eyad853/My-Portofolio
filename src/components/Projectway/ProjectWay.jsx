import React from 'react'
import { Link } from 'react-router-dom'

const ProjectWay = ({link , image}) => {
return (
<div 
className=' relative bg-slate-500 w-1/3 h-full mr-10 rounded-2xl bg-gradient-to-tl from-slate-600 to-slate-900 transform hover:scale-105 transition-all duration-200'>
    <img src={image} className='w-full h-full rounded-2xl absolute' alt="" />
    <Link to={link} className='absolute w-full h-full z-50'></Link>
</div> 
)
}

export default ProjectWay