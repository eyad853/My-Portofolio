import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { SiMessenger } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SecondSection = () => {
  return (
    <div>
        <div className='w-full h-[100vh]  flex'>
            {/* the first part */}
            {/* the contacs */}
            <div className='h-full  w-1/12 flex flex-col items-center gap-10 text-white'>

                <div className='w-16 h-16 bg-gradient-to-tl from-slate-600 to-slate-900 flex justify-center items-center text-3xl mt-5 relative shadow-2xl rounded-md'>
                    <a target='_blank' href="https://www.linkedin.com/in/eyad-mosa-697735333" className='absolute w-full h-full'></a>
                    <FaLinkedinIn />
                </div>

                <div className='w-16 h-16 bg-gradient-to-tl from-slate-600 to-slate-900 flex justify-center items-center text-3xl relative shadow-2xl rounded-md'>
                    <a target='_blank' href="https://wa.me/966534215241" className='absolute w-full h-full'></a>
                    <FaWhatsapp />
                </div>

                <div className='w-16 h-16 bg-gradient-to-tl from-slate-600 to-slate-900 flex justify-center items-center text-3xl relative shadow-2xl rounded-md'>
                    <a target='_blank' href="https://t.me/+966534215241" className='absolute w-full h-full'></a>
                    <RiTelegram2Fill />
                </div>

            </div>


            {/* the second part */}
            {/* about me */}
            <div className='h-full  w-4/12 relative'>
                <div className='absolute top-0 right-5 left-5 hover:left-3 hover:right-3 hover:bottom-28 transition-all duration-200 bottom-32 rounded-2xl bg-gradient-to-tl from-slate-600 to-slate-900'>
                    <Link to={"/about"} className='absolute w-full h-full'></Link>

                    <div className='ml-10 mt-2'>
                        <h1 className='text-6xl mb-2'>Eyad Coder</h1>
                        <h1 className='text-2xl ml-1'>About ME</h1>
                    </div>

                    <div className='mt-5 w-96 ml-5'>
                        <p>
                        As a full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I excel in building responsive, user-friendly web applications that bridge functionality and design. With a strong command of front-end development using React and Tailwind CSS, and back-end expertise in building robust APIs with Node.js and Express, I deliver seamless, scalable solutions tailored to client needs. Whether it's developing custom features, optimizing performance, or ensuring a smooth user experience, I am dedicated to transforming ideas into high-quality, impactful digital products. Explore my work and discover how I can bring value to your next project!
                        </p>
                        <p className='text-cyan-400'>
                            Click to see the full text
                        </p>
                    </div>


                </div>
                    <div className='absolute bottom-5 left-10 text-7xl'>
                        Skills
                    </div>
            </div>

            {/* the third part */}
            {/* other things */}
            <div className='h-full  w-7/12 '>
                <div className='grid grid-cols-4 grid-rows-1 gap-2 gap-y-5'>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <SiSocketdotio />
                        </div>

                        <div className='mt-3'>
                            Socket.io
                        </div>
                    </div>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <FaCss3Alt />
                        </div>

                        <div className='mt-3'>
                            CSS
                        </div>
                    </div>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <DiJavascript />
                        </div>

                        <div className='mt-3'>
                            Java_Script
                        </div>
                    </div>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <FaReact />
                        </div>

                        <div className='mt-3'>
                            ReactJS
                        </div>
                    </div>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <RiNodejsLine />
                        </div>

                        <div>
                            Node.js
                        </div>
                    </div>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <SiExpress />
                        </div>

                        <div className='mt-3'>
                            express.js
                        </div>
                    </div>

                    <div className='w-44 h-60  bg-gradient-to-tl from-slate-600 to-slate-900 relative hover:w-48 hover:h-64 transition-all duration-200 rounded-2xl flex flex-col justify-center items-center'>
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
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
                        <Link className='absolute w-full h-full' to={"/skills"}></Link>
                        <div className='text-8xl'>
                            <RiTailwindCssFill />
                        </div>

                        <div className='mt-3'>
                            TailwindCss
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default SecondSection