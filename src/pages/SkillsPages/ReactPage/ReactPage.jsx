import React from 'react'
import Nav from '../../../components/Nav/Nav'
import ReactBody from '../../../components/SkillsBodies/ReactBody/ReactBody'

const ReactPage = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/My-Portofolio/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <ReactBody />
    </div>
</div>
  )
}

export default ReactPage