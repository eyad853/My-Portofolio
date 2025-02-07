import React from 'react'
import Nav from '../../../components/Nav/Nav'
import HtmlBody from '../../../components/SkillsBodies/HtmlBody/HtmlBody'

const HtmlPage = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/My-Portofolio/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <HtmlBody />
    </div>
</div>
  )
}

export default HtmlPage