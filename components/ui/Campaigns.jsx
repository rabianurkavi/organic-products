import Image from 'next/image'
import React from 'react'
const CampaignsItem = ()=>{
    return (
        <div className="container mx-auto">
            <div className="px-60">
            <div className=" relative w-96 h-60 ">
                <Image className='hover:scale-105 transition-all' src="/images/img-01.jpg" alt='' layout='fill' />
            </div>
            </div>
        </div>
    )
}
const CampaignsItem2 = ()=>{
    return (
        <div className="container mx-auto ">
            <div className="px-[50px]">
             <div className=" relative w-96 h-60 ">
                <Image className='hover:scale-105 transition-all' src="/images/img-02.jpg" alt='' layout='fill' objectFit='cover' />
             </div>
            </div>
        </div>
    )
}
const Campaigns = () => {
  return (
    <div className='mt-8 flex bg-[#f5f5f5] py-20 justify-center'>
        <CampaignsItem />
        <CampaignsItem2 />
    </div>
  )
}

export default Campaigns