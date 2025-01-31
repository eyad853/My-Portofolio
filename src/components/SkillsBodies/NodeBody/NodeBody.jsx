import React from 'react'

const NodeBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
            Node.js
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                Node.js is a powerful runtime environment that allows JavaScript to be used on the server side. I leverage Node.js to build fast, scalable, and efficient back-end applications that can handle high traffic and real-time data.
                </span>

                <span className='block mb-3 mr-44 text-xl'>
                What I Offer:
                </span>
                
                <span className='block mb-3 '>
                Expertise in building RESTful APIs with Express.js and Node.js for handling HTTP requests and responses.
                </span>

                <span className='block mb-3 '>
                Proficiency with middleware to handle authentication, data validation, and error management
                </span>

                <span className='block mb-3 '>
                Experience with database integration, using MongoDB with Mongoose and MySQL for storing and managing data.
                </span>

                <span className='block mb-3 '>
                Strong understanding of asynchronous programming, using Promises and async/await for non-blocking operations.
                </span>

                <span className='block mb-3 '>
                Ability to implement authentication and authorization using technologies like JWT and OAuth.
                </span>

                <span className='block mb-3 '>
                Familiarity with creating scalable and maintainable applications using MVC architecture.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Examples of Use:
                </span>          

                <span className='block mb-3 '>
                Developed a RESTful API for a blog application, allowing users to create, update, and delete posts.
                </span>             

                <span className='block mb-3 '>
                Built a user authentication system using JWT tokens for a secure login flow.
                </span>            

                <span className='block mb-3 '>
                Integrated a MongoDB database to store user data and blog content, and a MySQL database for transactional data.
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default NodeBody