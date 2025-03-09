import React from 'react'
import Nav from '../../../../components/Nav/Nav'
import FS_ThirdProjectBody from './FS_ThirdProjectBody'

const FS_ThirdProject = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen min-h-screen bg-gradient-to-r from-[#121212] via-[#1f2937] to-[#031e49]
      bg-cover bg-bottom bg-no-repeat '>
        <Nav/>
        <FS_ThirdProjectBody/>
    </div>
</div>
  )
}

export default FS_ThirdProject