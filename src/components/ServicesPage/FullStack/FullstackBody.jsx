import React from 'react'

const FullstackBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
      <div className='w-full h-full flex justify-center'>
          <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

              <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
                Full Stack Development
              </div>

              <div className='mr-20 font-bold flex flex-col items-center w-full'>

                  <span className='block mb-3 '>
                    I specialize in building dynamic, scalable, and responsive full-stack applications that meet your business needs. Leveraging the power of the MERN stack MongoDB, Express.js, React, and Node.js, I deliver end-to-end solutions, including:
                  </span>

                  <span className='block mb-3 '>
                    Custom Web Application Development
                    From simple websites to complex platforms, I create tailored solutions that align with your goals.
                  </span>
                  
                  <span className='block mb-3 '>
                    Backend Development
                    Efficient, secure, and robust APIs built with Node.js and Express.js, ensuring seamless communication between the frontend and backend.
                  </span>

                  <span className='block mb-3 '>
                    Frontend Development
                    Interactive and user-friendly interfaces using React, delivering a smooth and engaging user experience.
                  </span>

                  <span className='block mb-3 '>
                    Database Design and Integration
                    Scalable, well-structured databases using MongoDB to handle your application's data efficiently.
                  </span>

                  <span className='block mb-3 '>
                    Full Deployment & Maintenance
                    Deployment to platforms like Heroku, Vercel, or AWS, with ongoing support and updates to keep your application running smoothly.
                  </span>

                  <span className='block mb-3 '>
                    Why Choose Me?
                    With expertise in modern web technologies, I ensure clean, maintainable code and prioritize performance, security, and scalability. Let's build something great together!
                  </span>                  
              </div>
          </div>
      </div>
    </div>

  )
}

export default FullstackBody