import React from 'react'
import F_FIrstProjectBody from './F_FIrstProjectBody'
import Nav from '../../../../components/Nav/Nav'

const F_FirstProject = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen min-h-screen bg-gradient-to-r from-[#121212] via-[#1f2937] to-[#031e49]
      bg-cover bg-bottom bg-no-repeat '>
        <Nav/>
        <F_FIrstProjectBody/>
    </div>
</div>
  )
}

export default F_FirstProject