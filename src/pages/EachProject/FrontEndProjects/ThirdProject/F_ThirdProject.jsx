import React from 'react'
import F_ThirdProjectBody from './F_ThirdProjectBody'
import Nav from '../../../../components/Nav/Nav'

const F_ThirdProject = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen min-h-screen bg-gradient-to-r from-[#121212] via-[#1f2937] to-[#031e49]
      bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <F_ThirdProjectBody/>
    </div>
</div>
  )
}

export default F_ThirdProject