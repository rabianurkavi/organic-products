import React from 'react'
import Carousel from '@/components/ui/Carousel';
import OrganicProductList from '@/components/ui/OrganicProductList';
import Campaigns from '@/components/ui/Campaigns';
import MenuWrapper from '@/components/product/MenuWrapper';
import Blog from '@/components/blog/Blog';


export const Index = () => {
  return (
    <div className=''>
      <Carousel />
      <OrganicProductList />
      <Campaigns />
      <MenuWrapper />
      <Blog />
    </div>
  )
}

export default Index;