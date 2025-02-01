import React from 'react'
import Real_T_app from './Real_T_app'
import Nav from '../../Nav/Nav'

const Real_Time_Applications = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/bg.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <Real_T_app />
    </div>
</div>
  )
}

export default Real_Time_Applications