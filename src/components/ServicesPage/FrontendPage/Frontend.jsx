import React from 'react'
import FrontendPage from './FrontendPage'
import Nav from '../../Nav/Nav'

const Frontend = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/_bd71bd68-32fa-438f-a1c1-20e6bfbdfc64.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <FrontendPage />
    </div>
</div>
  )
}

export default Frontend