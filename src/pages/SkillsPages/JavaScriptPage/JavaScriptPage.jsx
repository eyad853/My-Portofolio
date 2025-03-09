import React from 'react'
import JavaScriptBody from '../../../components/SkillsBodies/JavaScriptBody/JavaScriptBody'
import Nav from '../../../components/Nav/Nav'

const JavaScriptPage = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <JavaScriptBody />
    </div>
</div>
  )
}

export default JavaScriptPage