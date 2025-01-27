import React from 'react'

const APIBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7 '>
              API Development and Integration
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                I specialize in creating and integrating APIs that enable seamless communication between systems, enhance functionality, and ensure your application is future-ready. From custom APIs to third-party integrations, I deliver scalable and efficient solutions tailored to your needs.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Services I Offer:
                </span>
                
                <span className='block mb-3 '>
                Custom API Development
                Designing and building RESTful or GraphQL APIs to power your application with reliable and efficient endpoints.          
                </span>

                <span className='block mb-3 '>
                Third-Party API Integration
                Integrating external APIs e.g., payment gateways, social media platforms, or cloud services to extend your application's functionality.
                </span>

                <span className='block mb-3 '>
                Authentication and Security
                Implementing secure API access using technologies like OAuth, JWT, and API keys to protect sensitive data.
                </span>

                <span className='block mb-3 '>
                Real-Time API Integration
                Enabling real-time features such as notifications, chat functionality, or live updates with tools like WebSockets and Socket.IO.
                </span>

                <span className='block mb-3 '>
                API Performance Optimization
                Ensuring fast and efficient API responses with optimized endpoints, caching, and load balancing techniques.
                </span>          

                <span className='block mb-3 '>
                Comprehensive API Documentation
                Providing clear and developer-friendly documentation to ensure smooth adoption and use of your APIs.
                </span> 

                <span className='block mb-3 '>
                Why Choose Me?
                With expertise in modern API technologies and protocols, I ensure your APIs are secure, scalable, and easy to integrate. Whether you need a custom API or want to connect with existing services, I'll help bring your ideas to life.
                </span>                     
            </div>
        </div>
    </div>
  </div>
  )
}

export default APIBody