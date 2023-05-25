import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import Title from '../ui/Title';
import {BsFillTelephoneFill,BsPinterest} from "react-icons/bs"
import{AiFillInstagram,AiFillTwitterSquare,AiFillFacebook,AiFillLinkedin,AiFillMail} from "react-icons/ai"

const Footer = () => {
   
  return (
    
    <div className='bg-black '>
      <div className='container mx-auto pt-16 pb-6' >
        {/* //carousel */}
        <div></div>
        {/* info1 */}
        <div className='flex justify-between'>
          {/* Açık Saatler */}
          <div className='w-1/3 text-white text-[12px]'>
            <Title addClass="text-[15px] text-white ">Çalışma Saatlerimiz</Title>
            <hr className="border-yellow-200 w-60 py-2"></hr>
            <p>Pazartesi - Cuma: 08:00 - 17:00</p>
            <p>Cumartesi: 10:00 - 20:00</p>
            <p>Pazar: Kapalı</p>
          </div>
          
          
          {/* Abone Olma */}
          <div className='w-1/3'>
            <label className='relative block cursor-text w-full'>
            <Title addClass="text-[15px] text-white ">Haber Bülteni</Title>
            <hr className="border-yellow-200 w-60 py-2"></hr>
              <input className='h-8 w-80 border outline-none px-4 peer text-sm border-primary mb-1' placeholder='Emaili girin' />
              <div className="flex items-center gap-x-2 ">
               <button className='btn-primary  flex items-center font-sans font-semibold hover:bg-yellow-500'><AiFillMail/>
                </button>
                </div>           
            </label>
          </div>

          {/* Sosyal Medya */}
          <div className='w-1/3'>
          <Title addClass="text-[15px] text-white ">Sosyal Medya</Title>
          <hr className="border-yellow-200 w-60 py-2"></hr>
             <div className='flex items-center gap-x-2 '>
                        <a href='' className='w-8 h-8 grid place-content-center bg-primary text-secondary rounded-full'>
                        <AiFillInstagram></AiFillInstagram>
                        </a>
                        
                        <a href='' className='w-8 h-8 grid place-content-center bg-primary text-secondary rounded-full'>
                        <AiFillTwitterSquare></AiFillTwitterSquare>
                        </a>
                        <a href='' className='w-8 h-8 grid place-content-center bg-primary text-secondary rounded-full'>
                        <AiFillFacebook></AiFillFacebook>
                        </a>
                        <a href='' className='w-8 h-8 grid place-content-center bg-primary text-secondary rounded-full'>
                        <AiFillLinkedin></AiFillLinkedin>
                        </a>
                        <a href='' className='w-8 h-8 grid place-content-center bg-primary text-secondary rounded-full'>
                        <BsPinterest></BsPinterest>
                        </a>
                     </div>
                  
               </div>
        </div>
        <hr className='my-3'></hr>
        {/* info2 */}
        <div></div>
      </div>
    </div>
   

  )
}

export default Footer