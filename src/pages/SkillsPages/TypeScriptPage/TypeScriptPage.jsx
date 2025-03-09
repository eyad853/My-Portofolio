import React from 'react'
import Nav from '../../../components/Nav/Nav'
import TypeScriptBody from '../../../components/SkillsBodies/TypeScriptBody/TypeScriptBody'

const TypeScriptPage = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <TypeScriptBody />
    </div>
</div>
  )
}

export default TypeScriptPage