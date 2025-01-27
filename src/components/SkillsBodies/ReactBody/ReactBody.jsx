import React from 'react'

const ReactBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
              ReactJs
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                React is a powerful JavaScript library for building user interfaces, enabling the creation of dynamic, responsive, and highly interactive web applications. I specialize in developing scalable and maintainable React applications that provide seamless user experiences.
                </span>

                <span className='block mb-3 mr-44 text-xl'>
                What I Offer:
                </span>
                
                <span className='block mb-3 '>
                Expertise in building single-page applications SPAs with React.
                </span>

                <span className='block mb-3 '>
                Proficiency with React hooks like useState, useEffect, useContext, etc. for functional component development.
                </span>

                <span className='block mb-3 '>
                Experience with React Router for routing and navigation in SPAs.
                </span>

                <span className='block mb-3 '>
                Skilled in managing application state with Context API 
                </span>

                <span className='block mb-3 '>
                Familiarity with component-driven development, creating reusable UI components.
                </span>

                <span className='block mb-3 '>
                Knowledge of React performance optimization techniques e.g., memoization, lazy loading.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Examples of Use:
                </span>          

                <span className='block mb-3 '>
                Built an interactive to-do list and note-taking applications with CRUD operations.
                </span>             

                <span className='block mb-3 '>
                Developed a real-time messaging app with WebSockets and React.
                </span>            

                <span className='block mb-3 '>
                Created a dynamic blog platform with React, using React Router for smooth navigation between pages.
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default ReactBody