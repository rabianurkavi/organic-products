import Image from 'next/image'
import React from 'react'
const CampaignsItem = ()=>{
    return (
        <div className="">
            <div className="relative w-96 h-60 ">
                <Image className='hover:scale-105 transition-all' src="/images/img-01.jpg" alt='' layout='fill' />
            </div>
        </div>
    )
}
const CampaignsItem2 = ()=>{
    return (
        <div className="">
            <div className="relative w-96 h-60 ">
                <Image className='hover:scale-105 transition-all' src="/images/img-02.jpg" alt='' layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}
const Campaigns = () => {
  return (
    <div className='flex container mx-auto py-20 flex-wrap gap-x-80'>
        <CampaignsItem />
        <CampaignsItem2 />
    </div>
  )
}

export default Campaigns