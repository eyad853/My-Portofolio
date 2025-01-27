import React from 'react'

const MongoDbBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
            MongoDB and Mongoose
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                MongoDB is a NoSQL database that provides flexibility in managing unstructured data, while Mongoose is a powerful ODM Object Data Modeling library that simplifies interactions with MongoDB. I use both to build scalable, data-driven applications efficiently.
                </span>

                <span className='block mb-3 mr-44 text-xl'>
                What I Offer:
                </span>
                
                <span className='block mb-3 '>
                Proficiency in designing MongoDB schemas and models using Mongoose for structured and efficient data storage.
                </span>

                <span className='block mb-3 '>
                Expertise in creating and managing collections for CRUD operations and complex queries.
                </span>

                <span className='block mb-3 '>
                Experience with Mongoose middleware for pre/post hooks to enhance database logic.
                </span>

                <span className='block mb-3 '>
                Skilled in optimizing database performance with indexing and aggregation pipelines.
                </span>

                <span className='block mb-3 '>
                Strong understanding of relationships and population to manage references between collections.
                </span>

                <span className='block mb-3 '>
                Familiarity with managing data validation and handling errors at the schema level.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Examples of Use:
                </span>          

                <span className='block mb-3 '>
                Designed a robust schema for a blogging platform to store posts, users, and comments, with seamless relationships between collections.
                </span>             

                <span className='block mb-3 '>
                Built an e-commerce application with advanced features like product filtering, cart management, and order tracking using MongoDB and Mongoose.
                </span>            

                <span className='block mb-3 '>
                Utilized aggregation pipelines to generate analytics and reports, such as user activity trends.
                </span>    

                <span className='block mb-3 '>
                Implemented pre-save hooks for password hashing and data validation in a user authentication system.
                </span>  

                <span className='block mb-3 '>
                Migrated a relational database structure to MongoDB, optimizing query performance and reducing latency.
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default MongoDbBody