import React from 'react'
import Nav from '../../Nav/Nav'
import FullstackBody from './FullstackBody'

const FullStack = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/_bd71bd68-32fa-438f-a1c1-20e6bfbdfc64.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <FullstackBody />
    </div>
</div>
  )
}

export default FullStack