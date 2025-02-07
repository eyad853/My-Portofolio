import React from 'react'
import Nav from '../../../components/Nav/Nav'
import TailwindBody from '../../../components/SkillsBodies/TailwindBody/TailwindBody'

const Tailwind = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/My-Portofolio/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <TailwindBody />
    </div>
</div>
  )
}

export default Tailwind