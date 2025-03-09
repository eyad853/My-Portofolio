import React from 'react'
import DBBody from './DBBody'
import Nav from '../../Nav/Nav'

const DataBase = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <DBBody />
    </div>
</div>
  )
}

export default DataBase