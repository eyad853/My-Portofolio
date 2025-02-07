import React from 'react'
import Nav from '../../components/Nav/Nav'
import ServicePage from '../../components/ServicesPage/ServicePage'

const Services = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <ServicePage />
    </div>
</div>
  )
}

export default Services