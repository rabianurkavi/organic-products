import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import Title from '../ui/Title';

const Footer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //ilk çıkan yön tuşlarını devre dışı bırakma
        arrows:false,
        autoplay:true,
        autoplayspeed:3500,
        appenDots: (dots) =>{
          <div>
            <ul style={{marginTop: "10px"}}>{dots}</ul>
          </div>
        },
        //yön tuşları
        customPaging: (i) =>(
          <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
        )
    }
  return (
    
    <div className=''>
        {/* //carousel */}
     <div>
        <div className='absolute top-0 left-0 w-full h-full '>
        <div className='relative h-full w-full '>
        <Image src="/images/hero-bg.jpg" alt='' layout='fill' objectFit='cover' />
         </div>
        </div>
        <Slider {...settings}>
         <div >
           <div className='mt-48  text-white flex flex-col items-start gap-y-10'>
             <Title addClass="text-6xl"> Bambur Restorant</Title>
               <p className='text-sm sm:w-1/3'>
                Jastilier® eti, büyük boy susamlı sandviç ekmeği, salatalık turşusu, ketçap, mayonez, doğranmış marul,
                domates ve soğandan oluşan bir Burger King® klasiği. Enfes patates kızartması ve içeceğiyle birlikte 
                Whopper® Menü keyfini istediğin gibi yaşa!
               </p>
               <button className='btn-primary'>Şimdi Sipariş Ver</button>
           </div>     
          </div>
          <div>
           <div className='relative  text-white top-48 flex flex-col items-start gap-y-10'>
             <Title addClass="text-6xl"> Bambur Restorant</Title>
               <p className='text-sm sm:w-1/3'>
                Jastilier® eti, büyük boy susamlı sandviç ekmeği, salatalık turşusu, ketçap, mayonez, doğranmış marul,
                domates ve soğandan oluşan bir Burger King® klasiği. Enfes patates kızartması ve içeceğiyle birlikte 
                Whopper® Menü keyfini istediğin gibi yaşa!
               </p>
               <button className='btn-primary'>Şimdi Sipariş Ver</button>
           </div>     
          </div>
        </Slider>

      </div>
        {/* info1 */}
        <div></div>
        {/* info2 */}
        <div></div>
    </div>
   

  )
}

export default Footer