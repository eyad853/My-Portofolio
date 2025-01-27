import React from 'react'

const DBBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
              Database Management
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                I specialize in designing, managing, and optimizing databases that ensure your application’s data is organized, secure, and easily accessible. Whether it's a small project or a large-scale application, I deliver reliable database solutions tailored to your needs.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Services I Offer:
                </span>
                
                <span className='block mb-3 '>
                Database Design and Architecture
                Crafting well-structured database schemas that align with your application's requirements.            
                </span>

                <span className='block mb-3 '>
                Database Design and Management
                Creating and managing efficient, structured databases using MongoDB, ensuring data integrity and fast queries.
                </span>

                <span className='block mb-3 '>
                Database Integration
                Seamlessly connecting your application with databases like MongoDB or MySQL for efficient data handling.
                </span>

                <span className='block mb-3 '>
                Data Migration
                Safely transferring data between databases or upgrading systems without data loss or downtime.
                </span>

                <span className='block mb-3 '>
                Optimization and Performance Tuning
                Enhancing query performance, reducing response times, and ensuring your database operates efficiently.
                </span>          

                <span className='block mb-3 '>
                Data Security and Backup Solutions
                Implementing encryption, secure access controls, and regular backups to protect your data.
                </span>

                <span className='block mb-3 '>
                Monitoring and Maintenance
                Providing ongoing support, monitoring, and updates to keep your database running smoothly.
                </span>     

                <span className='block mb-3 '>
                Why Choose Me?
                With in-depth knowledge of database systems like MongoDB, MySQL, and Mongoose, I ensure your data is structured, secure, and optimized for performance. Let's create a robust foundation for your application's data needs!
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default DBBody