import React from 'react'

const FrontendPage = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
              Frontend Development
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                I craft visually stunning, responsive, and intuitive user interfaces that deliver a seamless experience across all devices. Using modern frameworks and tools, I ensure your application not only looks great but also performs flawlessly.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Services I Offer:
                </span>
                
                <span className='block mb-3 '>
                Custom UI/UX Design Implementation
                Translating design concepts into fully functional, pixel-perfect interfaces.
                </span>

                <span className='block mb-3 '>
                Responsive Web Design
                Ensuring your website or app looks and works perfectly on desktops, tablets, and mobile devices.
                </span>

                <span className='block mb-3 '>
                Interactive Features and Animations
                Adding engaging animations and interactivity to enhance the user experience using modern tools and libraries.
                </span>

                <span className='block mb-3 '>
                Component-Based Architecture
                Building reusable, modular components for scalability and easier maintenance using React.
                </span>

                <span className='block mb-3 '>
                Performance Optimization
                Ensuring fast load times and smooth navigation for an enhanced user experience.
                </span>          

                <span className='block mb-3 '>
                Why Choose Me?
                I bring creativity and technical expertise together to create designs that captivate and engage users. Every project is optimized for aesthetics, usability, and speed, ensuring your frontend is as impactful as it is functional.
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default FrontendPage