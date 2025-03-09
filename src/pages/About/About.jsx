import React from 'react'
import Nav from '../../components/Nav/Nav'
import TheMainPage from '../../components/about/TheMainPage/TheMainPage'

const About = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-20'>
        <Nav />
        <TheMainPage />
    </div>
</div>
  )
}

export default About