import React from 'react'
import FS_FirstProjectBody from './FS_FirstProjectBody'
import Nav from '../../../../components/Nav/Nav'

const FS_FirstProject = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen min-h-screen bg-gradient-to-r from-[#121212] via-[#1f2937] to-[#031e49]
      bg-cover bg-bottom bg-no-repeat '>
        <Nav/>
        <FS_FirstProjectBody/>
    </div>
</div>
  )
}

export default FS_FirstProject