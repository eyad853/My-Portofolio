import React from 'react'

const ExpressBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
              ExpressJS
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                Express.js is a lightweight and flexible web application framework built on Node.js, designed to simplify server-side development. I use Express.js to create fast, robust, and maintainable back-end solutions tailored to application needs.
                </span>

                <span className='block mb-3 mr-44 text-xl'>
                What I Offer:
                </span>
                
                <span className='block mb-3 '>
                Expertise in developing RESTful APIs with Express.js for efficient handling of HTTP requests and responses.
                </span>

                <span className='block mb-3 '>
                Proficiency in using middleware for tasks like authentication, data validation, and logging.
                </span>

                <span className='block mb-3 '>
                Experience integrating databases like MongoDB with Mongoose and MySQL for seamless data management.
                </span>

                <span className='block mb-3 '>
                Skill in implementing authentication and authorization with technologies like JWT, Passport.js, and session-based strategies.
                </span>

                <span className='block mb-3 '>
                Ability to create scalable applications following best practices, such as modular routing and MVC architecture.
                </span>

                <span className='block mb-3 '>
                Familiarity with real-time communication using Socket.IO for features like live chat and notifications.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Examples of Use:
                </span>          

                <span className='block mb-3 '>
                Designed and implemented a complete RESTful API for a to-do list application, enabling CRUD operations and user management.
                </span>             

                <span className='block mb-3 '>
                Developed middleware for error handling and input validation, improving the reliability of the API.
                </span>            

                <span className='block mb-3 '>
                Built a real-time chat application using Express.js and Socket.IO for instant communication between users.
                </span>        

                <span className='block mb-3 '>
                Integrated MongoDB for dynamic data storage and implemented a secure authentication system using JWT.
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default ExpressBody