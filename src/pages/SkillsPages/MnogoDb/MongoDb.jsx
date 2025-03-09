import React from 'react'
import Nav from '../../../components/Nav/Nav'
import MongoDbBody from '../../../components/SkillsBodies/MongoDbBody/MongoDbBody'

const MongoDb = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <MongoDbBody />
    </div>
</div>
  )
}

export default MongoDb