import Image from 'next/image'
import React from 'react'
import {MdShoppingBasket} from "react-icons/md"

const MenuItem = () => {
    return (
      <div className="bg-secondary ">
          <div className='w-full bg-primary h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl '>
            <div className="relative w-[280px] h-[210px] hover:scale-110 transition-all">
              <Image src="/images/olive.jpg" alt="" layout="fill" objectFit='cover' className="rounded-xl rounded-bl-[40px]"   />
            </div>
          </div>
          <div className="p-[25px] text-black">
            <h4 className="text-xl font-sans">Hal Hal Zeytin</h4>
            <p className="text-[13px]">Doğal ürünlerimizden hal hal zeytin Hatay dan gelmektedir.</p>
          
            <div className="flex justify-between items-center mt-4">
             <button className='btn-black rounded-full flex items-center gap-2 font-sans font-semibold hover:bg-primary'>
              Sepete Ekle<MdShoppingBasket /></button>
             <span className='text-primary font-bold'>200₺</span>
             </div>
          </div>
      </div>
    )
  }

export default MenuItem