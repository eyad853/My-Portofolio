import React from 'react'
import Nav from '../../components/Nav/Nav'
import ContactPage from '../../components/Contacts/ContactPage'

const Contact = () => {
  return (
    <div className='text-white overflow-hidden h-[100vh]'>
    <div className='w-screen h-full bg-[url("/_bd71bd68-32fa-438f-a1c1-20e6bfbdfc64.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav />
        <ContactPage />
    </div>
</div>
  )
}

export default Contact