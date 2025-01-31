import React from 'react'
import { Link } from 'react-router-dom'

const ServicePage = () => {
  return (
    <div>
        <div className='w-full h-full flex flex-col items-center'>
            {/* full stack development */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-2xl flex justify-center items-center relative hover:w-85 hover:h-100 transition-all duration-300'>
            <Link to={"/services/fullstack_development"} className='absolute w-full h-full'></Link>
            Full Stack development
            </div>

            {/* frontend */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-2xl flex justify-center relative items-center hover:w-85 hover:h-100 transition-all duration-300'>
            <Link to={"/services/frontend"} className='absolute w-full h-full'></Link>
            Frontend Development
            </div>

            {/* backend */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-2xl flex justify-center items-center relative hover:w-85 hover:h-100 transition-all duration-300'>
                <Link to={"/services/backend"} className='absolute w-full h-full'></Link>
            Backend Development
            </div>

            {/* database */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-2xl flex justify-center items-center relative hover:w-85 hover:h-100 transition-all duration-300'>
                <Link to={"/services/database"} className='absolute w-full h-full'></Link>
            Database Management
            </div>

            {/* API Development & Integration */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-xl flex justify-center items-center relative hover:w-85 hover:h-100 transition-all duration-300'>
                <Link to={"/services/api_dev_int"} className='absolute w-full h-full'></Link>
            API Development & Integration
            </div>

            {/* Real-Time Applications */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-2xl flex justify-center items-center relative hover:w-85 hover:h-100 transition-all duration-300'>
                <Link to={"/services/real_time_apps"} className='absolute w-full h-full'></Link>
            Real-Time Applications
            </div>

            {/* Version Control & Deployment */}
            <div className='w-80 h-96 bg-gradient-to-tl from-slate-600 to-slate-900 mr-28 mt-20 rounded-2xl font-bold text-xl flex justify-center items-center relative hover:w-85 hover:h-100 transition-all duration-300'>
                <Link to={"/services/v_c_d"} className='absolute w-full h-full'></Link>
            Version Control & Deployment
            </div>

        </div>
    </div>
  )
}

export default ServicePage