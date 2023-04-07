import React from 'react'
import Carousel from '@/components/ui/Carousel';
import OrganicProductList from '@/components/ui/OrganicProductList';
import Campaigns from '@/components/ui/Campaigns';


export const Index = () => {
  return (
    <div className=''>
      <Carousel />
      <OrganicProductList />
      <Campaigns />
      
    </div>
  )
}

export default Index;