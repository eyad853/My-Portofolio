import React from 'react'
import CssBody from '../../../components/SkillsBodies/CssBody/CssBody'
import Nav from '../../../components/Nav/Nav'

const CssPage = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <CssBody />
    </div>
</div>
  )
}

export default CssPage