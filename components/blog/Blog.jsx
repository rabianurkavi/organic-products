import React from 'react'
import BlogItems from './BlogItems'
import Title from '../ui/Title'

const Blog = () => {
    return (
        <div className="mx-auto mb-16 py-10 bg-slate-100 justify-center" >
            <div className="flex flex-col items-center">
                <Title addClass="text-[40px]" >Blog Sayfamız</Title>
              <div className='mt-10 flex items-center gap-3'>
                 <p></p>
              </div>
            </div>
            {/* <div className="container mx-auto justify-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-10"> */}
            <div className='py-10'>
                <BlogItems />
            </div>
          </div>
      )
}

export default Blog