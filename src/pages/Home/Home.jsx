import React from 'react'
import Nav from '../../components/Nav/Nav'
import FirstSection from '../../components/FirstSection/FirstSection'
import SecondSection from '../../components/SecondSection/SecondSection'
import ThirdSection from '../../components/ThirdSection/ThirdSection'

const Home = () => {
  return (
    <div className='text-white overflow-hidden'>
        <div className='w-screen h-full bg-[url("/_bd71bd68-32fa-438f-a1c1-20e6bfbdfc64.jpeg")] bg-cover bg-bottom bg-no-repeat '>
            <Nav />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    </div>
  )
}

export default Home