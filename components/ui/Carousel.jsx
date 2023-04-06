import Image from 'next/image'
import React, { useState } from 'react'
import Title from './Title'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModel, setIsImageModal] = useState(false);
  const srclinks= ["/images/banner-02.jpg", "/images/olive2.jpg","/images/organic2.jpg"];
  
  const handleSlideChange = (current) => {
    setCurrentSlide(current);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // ilk çıkan yön tuşlarını devre dışı bırakma
    autoplay: true,
    autoplayspeed: 3500,
    appenDots: (dots) => {
      <div>
        <ul style={{ marginTop: "10px" }}>{dots}</ul>
      </div>;
    },
    //yön tuşları
    customPaging: (i) =>(
      <div className='w-5 h-5 border bg-transparent rounded-t-md mt-10'></div>
    ),
    beforeChange: handleSlideChange,
  };
  return (
    <div className='h-screen w-full container mx-auto -mt-[88px] '> 
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative h-full w-full inset-0 bg-black opacity-90'>
        <Image
            src={srclinks[currentSlide]} // resim src'si, currentSlide'a göre seçilir
            alt=""
            layout="fill"
            objectFit="cover"
            style={{opacity: 0.5}}
          />
        </div>
      </div>
      <Slider {...settings} onClick={()=>setIsImageModal(true)}>
      <div>
        <div className='mt-48 text-white flex flex-col justify-center items-center gap-y-10'  >
          <Title addClass="text-5xl text-center font-poppins ">ORGANİK PAZARA <br/> HOŞGELDİN </Title>
          <p className='text-sm sm:w-1/3 text-center'>Ürünlerimiz tamamaen el yapımıdır. Herhangi bir katkı maddesi yoktur. Güvenle çocuklarınıza,
          hastalarınıza yedirebilirsiniz. Siz de bu ürünleri kaçırmayın hadi envanterimize göz atın!
          </p>
         <button className='btn-primary'>ALIŞVERİŞE BAŞLA</button>
        </div>
       </div>
       <div>
        <div className='mt-48 text-white flex flex-col justify-center items-center gap-y-10'  >
          <Title addClass="text-5xl text-center font-poppins ">ORGANİK PAZARA <br/> HOŞGELDİN </Title>
          <p className='text-sm sm:w-1/3 text-center '>Ürünlerimiz tamamaen el yapımıdır. Herhangi bir katkı maddesi yoktur. Güvenle çocuklarınıza,
          hastalarınıza yedirebilirsiniz. Siz de bu ürünleri kaçırmayın hadi envanterimize göz atın!
          </p>
         <button className='btn-primary'>ALIŞVERİŞE BAŞLA</button>
        </div>
       </div>
       <div>
        <div className='mt-48 text-white flex flex-col justify-center items-center gap-y-10'  >
          <Title addClass="text-5xl text-center font-poppins ">ORGANİK PAZARA <br/> HOŞGELDİN </Title>
          <p className='text-sm sm:w-1/3 text-center'>Ürünlerimiz tamamaen el yapımıdır. Herhangi bir katkı maddesi yoktur. Güvenle çocuklarınıza,
          hastalarınıza yedirebilirsiniz. Siz de bu ürünleri kaçırmayın hadi envanterimize göz atın!
          </p>
         <button className='btn-primary'>ALIŞVERİŞE BAŞLA</button>
        </div>
       </div>
      </Slider>
      
    </div>
  )
}

export default Carousel
