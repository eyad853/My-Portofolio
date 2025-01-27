import React from 'react'

const TheMainPage = () => {
  return (
    <div className=''>
        <div className=' w-full h-full flex'>
        {/* the photo */}
        <div className=' h-full w-1/3 flex justify-end'>
            <div className='w-80 h-80 bg-black rounded-full mt-10 border-4 border-white'>
                <img src="myphoto.png" className='w-full h-full object-cover rounded-full' alt="" />
            </div>
        </div>

        {/* the text */}
        <div className=' h-full w-2/3 mt-7 ml-7 bg-gradient-to-tl from-slate-600 to-slate-900 p-12 rounded-2x mr-10'>
            <div className='flex flex-col'>

                <span className='text-5xl mb-5'>About Me</span>

                <span className='mb-5'>
                Hey! I'm Eyad, A full-stack developer specializing in the MERN stack. I make user-friendly applications that meet modern standards and deliver excellent user experience. Let's build something new together!
                </span>

                <span className='mb-5'>
                My Expertise:

                    Frontend Development: Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and Tailwind CSS. I can create seamless, component-based applications that scale efficiently.

                    backend Development: Developing robust server-side solutions with Node.js and Express. I focus on creating secure, efficient, and maintainable APIs to power applications.

                    Database Management: Designing and managing databases using MongoDB and Mongoose to ensure data integrity and performance.

                    Real-time Applications: Implementing real-time features using Socket.IO for dynamic user experiences. Authentication & Security: Securing applications with JWT and session-based authentication methods to ensure data privacy and user trust.
                    Authentication & Security: Securing applications with JWT and session-based authentication methods to ensure data privacy and user trust.

                </span>

                <span className='mb-5'>
                     Why Choose Me?

                    I take pride in writing clean, maintainable, and scalable code. My approach to development involves collaborating closely with clients to understand their needs and delivering tailored solutions that exceed expectations. Whether you need a sleek frontend, a powerful backend, or a complete full-stack solution, I've got you covered.
                </span>

                
                
            </div>
        </div>


        </div>
    </div>
  )
}

export default TheMainPage





