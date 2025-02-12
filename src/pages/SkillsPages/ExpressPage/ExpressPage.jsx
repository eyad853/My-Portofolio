import React from 'react'
import Nav from '../../../components/Nav/Nav'
import ExpressBody from '../../../components/SkillsBodies/ExpressBody/ExpressBody'

const ExpressPage = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/My-Portofolio/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <ExpressBody />
    </div>
</div>
  )
}

export default ExpressPage