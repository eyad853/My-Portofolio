import React, { useState } from 'react'
import { SiSocketdotio } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Skill = () => {
  const [language , setLanguage] = useState("")

  const handleLanguage = (language)=>{
    setLanguage(language)
  }
  
  return (
   <div className='h-full  w-full ml-20 mt-10 '>
                   <div className='grid grid-cols-4 grid-rows-2 gap-2 gap-y-5'>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/socktIo"}></Link>
                           <div className='text-8xl'>
                               <SiSocketdotio />
                           </div>
   
                           <div className='mt-3'>
                               Socket.io
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/css"}></Link>
                           <div className='text-8xl'>
                               <FaCss3Alt />
                           </div>
   
                           <div className='mt-3'>
                               CSS
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/JavaScript"}></Link>
                           <div className='text-8xl'>
                               <DiJavascript />
                           </div>
   
                           <div className='mt-3'>
                               Java_Script
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/reactJS"}></Link>
                           <div className='text-8xl'>
                               <FaReact />
                           </div>
   
                           <div className='mt-3'>
                               ReactJS
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/nodeJs"}></Link>
                           <div className='text-8xl'>
                               <RiNodejsLine />
                           </div>
   
                           <div>
                               Node.js
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/expressJs"}></Link>
                           <div className='text-8xl'>
                               <SiExpress />
                           </div>
   
                           <div className='mt-3'>
                               express.js
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/MongoDb"}></Link>
                           <div className='text-8xl'>
                               <SiMongodb />
                           </div>
   
                           <div className='flex flex-col mt-3'>
                              <span>MongoDB</span>
                              <span className='ml-9'>&</span>
                              <span>Mongoose</span>
                           </div>
                       </div>
   
                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/tailwindCss"}></Link>
                           <div className='text-8xl'>
                               <RiTailwindCssFill />
                           </div>
   
                           <div className='mt-3'>
                               TailwindCss
                           </div>
                       </div>

                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/Typescript"}></Link>
                           <div className='text-8xl'>
                               <SiTypescript />
                           </div>
   
                           <div className='mt-3'>
                               Typscript
                           </div>
                       </div>

                       <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                           <Link className='absolute w-full h-full' to={"/skills/HTML"}></Link>
                           <div className='text-8xl'>
                               <FaHtml5 />
                           </div>
   
                           <div className='mt-3'>
                               HTML
                           </div>
                       </div>
   
                   </div>
               </div>
  )
}

export default Skill