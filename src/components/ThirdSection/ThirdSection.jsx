import React from 'react'
import { Link } from 'react-router-dom'

const ThirdSection = () => {
  return (
    <div className=''>
        <div className='w-full h-[60vh] '>
            <div className='w-full h-96  grid grid-cols-4 grid-rows-1  '>

                <div className='relative w-60 h-90 hover:w-64 hover:h-96 transition-all duration-200 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl ml-11 flex flex-col items-center'>
<Link to={"/services"} className='absolute w-full h-full'></Link>
                    <div className='mt-3 text-2xl font-bold'>
                        Frontend
                    </div>

                    <div className='ml-1'>
                        <p className='text-sm'>
                        I specialize in creating visually appealing and user-friendly interfaces that offer seamless user experiences. My expertise lies in combining React for building dynamic and interactive components with powerful state management solutions. For styling, I leverage CSS and Tailwind CSS to design responsive and modern layouts that adapt beautifully to any device. Whether it/'s crafting reusable components or optimizing for performance, I ensure the frontend is clean, maintainable, and engaging.
                        </p>
                    </div>
                </div>

                <div className='relative w-60 h-90 hover:w-64 hover:h-96 transition-all duration-200 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl ml-11 flex flex-col items-center'>
<Link to={"/services"} className='absolute w-full h-full'></Link>
                    <div className='mt-3 text-2xl font-bold'>
                        Backend
                    </div>

                    <div className='ml-2 mr-1' >
                        <p className='text-sm'>
                        On the backend, I excel in developing robust and scalable server-side applications using Node.js and Express.js. I focus on writing clean, efficient code to handle complex business logic and ensure fast API responses. From implementing secure authentication using JWT to building custom middleware, I ensure that the backend integrates seamlessly with the frontend, delivering Link smoot/servicesh overall experience.
                        </p>
                    </div>
                </div>

                <div className='relative w-60 h-90 hover:w-64 hover:h-96 transition-all duration-200 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl ml-11 flex flex-col items-center'>
<Link to={"/services"} className='absolute w-full h-full'></Link>
                    <div className='mt-3 text-2xl font-bold'>
                        DataBase
                    </div>

                    <div className='ml-2'>
                        <p className='text-sm'>
                        I am proficient in managing and designing databases with MongoDB. Using Mongoose, I efficiently model data, design schemas, and optimize queries for high performance. My approach ensures data integrity and scalability, allowing for secure and reliable storage of information in every project.
                        </p>
                    </div>
                </div>

                <div className='relative w-60 h-90 hover:w-64 hover:h-96 transition-all duration-200 bg-gradient-to-tl from-slate-600 to-slate-900 rounded-2xl ml-11 flex flex-col items-center'>
<Link to={"/services"} className='absolute w-full h-full'></Link>
                    <div className='mt-3 text-2xl font-bold'>
                        Tools
                    </div>

                    <div className='ml-2'>
                        <p className='text-sm'>
                        To streamline my workflow and ensure efficiency, I rely on industry-standard tools such as Postman for API testing and debugging. I use VS Code as my go-to code editor, customized for productivity and organization. Version control with Git and GitHub allows me to collaborate effectively and maintain clean project histories. Additionally, I deploy applications on platforms like Heroku, Netlify, and Vercel, ensuring they are live, accessible, and optimized for performance.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ThirdSection