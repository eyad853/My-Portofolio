import React from 'react'
import Nav from '../../components/Nav/Nav'
import Skill from '../../components/Skills/Skill'

const Skills = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-10'>
        <Nav />
        <Skill />
    </div>
</div>
  )
}

export default Skills