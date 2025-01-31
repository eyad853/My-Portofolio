import React from 'react'

const SocketIoBody = () => {
  return (
    <div className='h-full pb-10 w-full '>
    <div className='w-full h-full flex justify-center'>
        <div className='w-100 flex flex-col bg-gradient-to-tl from-slate-600 to-slate-900 p-10 rounded-2xl mt-10 mr-20  transition-all duration-200'>

            <div className='mr-20 mt-10 text-5xl font-bold mb-7'>
              Socket.io
            </div>

            <div className='mr-20 font-bold flex flex-col items-center w-full'>

                <span className='block mb-3 '>
                Socket.IO is a JavaScript library that enables real-time, bidirectional communication between clients and servers. It's ideal for building interactive and live applications like chat apps, real-time notifications, and live updates.
                </span>

                <span className='block mb-3 mr-44 text-xl'>
                What I Offer:
                </span>
                
                <span className='block mb-3 '>
                Expertise in implementing real-time features such as live messaging, collaboration tools, and notifications.
                </span>

                <span className='block mb-3 '>
                Seamless integration of Socket.IO into MERN stack applications.
                </span>

                <span className='block mb-3 '>
                Building scalable and responsive real-time solutions tailored to user needs.
                </span>

                <span className='block mb-3 '>
                Component-Based Architecture
                Building reusable, modular components for scalability and easier maintenance using React.
                </span>

                <span className='block mb-3 mr-40 text-xl'>
                Examples of Use:
                </span>          

                <span className='block mb-3 '>
                Created a real-time chat application with typing indicators and message delivery status.
                </span>             

                <span className='block mb-3 '>
                Built a live task-tracking dashboard with instant updates.
                </span>                  
            </div>
        </div>
    </div>
  </div>
  )
}

export default SocketIoBody