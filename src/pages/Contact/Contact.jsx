import React from 'react'
import Nav from '../../components/Nav/Nav'
import ContactPage from '../../components/Contacts/ContactPage'

const Contact = () => {
  return (
    <div className='text-white overflow-hidden h-[100vh]'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <ContactPage />
    </div>
</div>
  )
}

export default Contact