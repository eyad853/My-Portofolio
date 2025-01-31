import React from 'react'

const BackendPage = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
              Backend Development
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                  I design and develop reliable, scalable, and secure server-side architectures that form the backbone of your application.   With a focus on performance and maintainability, I ensure your backend is ready to handle anything.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Services I Offer:
                </span>
                
                <span className='block mb-3 '>
                  API Development
                  Building RESTful APIs and GraphQL endpoints to enable seamless communication between the frontend backend.                
                </span>

                <span className='block mb-3 '>
                Database Design and Management
                Creating and managing efficient, structured databases using MongoDB, ensuring data integrity and fast queries.
                </span>

                <span className='block mb-3 '>
                Authentication and Authorization
                Implementing secure user authentication systems with JWT, sessions, or OAuth to protect your application and user data.
                </span>

                <span className='block mb-3 '>
                Real-Time Functionality
                Adding real-time features such as live chats, notifications, or updates using Socket.IO.
                </span>

                <span className='block mb-3 '>
                Server Setup and Deployment
                Setting up and deploying backend systems to platforms like Heroku, AWS, or Vercel for high
                </span>          

                <span className='block mb-3 '>
                Error Handling and Logging
                Ensuring stability with robust error handling, logging, and monitoring systems for smooth application performance.
                </span>

                <span className='block mb-3 '>
                Why Choose Me?
                With expertise in backend technologies like Node.js, Express.js, and MongoDB, I create systems that are scalable, secure, and built for performance. Let's turn your ideas into a powerful backend solution!
                </span>                      
            </div>
        </div>
    </div>
  </div>
  )
}

export default BackendPage