import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=''>
        <div className='w-screen h-14  flex items-center justify-between font-bold'>
            
            {/* first part */}
            {/* home and about */}
            <div className=' h-full flex items-center justify-between w-72 ml-56 '>
                <span className='ml-12'>
                    <Link to="/">
                        Home
                    </Link>
                </span>

                <span className='mr-12'>
                    <Link to="/about">
                        About me
                    </Link>
                </span>
            </div>


            {/* second part */}
            {/* projects  */}
            <div className='  h-full flex items-center justify-between w-96 mr-60'>

                <span className='ml-6'>
                    <Link to="/projects">
                        Projects
                    </Link>
                </span>

                <span>
                    <Link to="/skills">
                        Skills
                    </Link>
                </span>

                <span>
                    <Link to="/services">
                        Services
                    </Link>
                </span>

                <span className='mr-6'>
                    <Link to="/contact">
                        Contact
                    </Link>
                </span>

            </div>


        </div>
    </div>
  )
}

export default Nav