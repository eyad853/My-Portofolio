import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { SiMessenger } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className='w-full h-screen  flex justify-center items-center relative '>
      <div className=' absolute top-20 right-20 left-20 bottom-20 p-10 '>
        <div className=' w-full h-full flex  flex-col justify-around'>


          <div className='w-full h-12 bg-slate-600 bg-gradient-to-tl from-slate-600 to-slate-900 relative flex justify-center gap-10 items-center rounded-xl mt-'>
            <a target='_blank' href="https://www.linkedin.com/in/eyad-mosa-697735333" className='absolute w-full h-full'></a>

            <div className=' font-bold'>
              Likned IN
            </div>

            <div className='text-2xl w-12 h-12 bg-slate-400 rounded-full flex justify-center items-center'>
              <FaLinkedinIn />
            </div>

          </div>

          <div className='w-full h-12 bg-slate-600 bg-gradient-to-tl from-slate-600 to-slate-900 relative flex justify-center gap-10 items-center rounded-xl'>
            <a target='_blank' href="https://wa.me/966534215241" className='absolute w-full h-full'></a>
            
            <div className=' font-bold'>
              WhatsApp
            </div>

            <div className='text-2xl w-12 h-12 bg-slate-400 rounded-full flex justify-center items-center mr-1'>
              <FaWhatsapp />
            </div>

          </div>

          <div className='w-full h-12 bg-slate-600 bg-gradient-to-tl from-slate-600 to-slate-900 relative flex justify-center gap-10 items-center rounded-xl mb-32'>
            <a target='_blank' href="https://t.me/+966534215241" className='absolute w-full h-full'></a>
            
            <div className=' font-bold'>
              Telegram
            </div>

            <div className='text-2xl w-12 h-12 bg-slate-400 rounded-full flex justify-center items-center '>
              <RiTelegram2Fill />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage