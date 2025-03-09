import React from 'react'
import Nav from '../../../../components/Nav/Nav'
import FS_SecondProjectBody from './FS_SecondProjectBody'

const FS_SecondProject = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen min-h-screen bg-gradient-to-r from-[#121212] via-[#1f2937] to-[#031e49]
      bg-cover bg-bottom bg-no-repeat '>
        <Nav/>
        <FS_SecondProjectBody/>
    </div>
</div>
  )
}

export default FS_SecondProject