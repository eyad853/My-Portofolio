import React from 'react'
import Nav from '../../Nav/Nav'
import BackendPage from './BackendPage'

const Backend = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/My-Portofolio/bg.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <BackendPage />
    </div>
</div>
  )
}

export default Backend