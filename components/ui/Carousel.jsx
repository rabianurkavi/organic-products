import Image from 'next/image'
import React from 'react'
import Title from './Title'

const Carousel = () => {
  return (
    <div className='h-screen w-full container mx-auto ] '> 
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative h-full w-full'>
            <Image src="/images/banner-02.jpg" style={{ opacity: 0.9 }} alt='' layout='fill' objectFit='cover' />
        </div>
      </div>
      <div className='relative text-white top-48 flex flex-col justify-center items-center gap-y-10'  >
        <Title addClass="text-5xl text-center font-poppins ">ORGANİK PAZARA <br/> HOŞGELDİN </Title>
       
        <p className='text-sm sm:w-1/3 '>Ürünlerimiz tamamaen el yapımıdır. Herhangi bir katkı maddesi yoktur. Güvenle çocuklarınıza,
        hastalarınıza yedirebilirsiniz. Siz de bu ürünleri kaçırmayın hadi envanterimize göz atın!
        </p>
        <button className='btn-primary'>ALIŞVERİŞE BAŞLA</button>
      </div>
    </div>
  )
}

export default Carousel