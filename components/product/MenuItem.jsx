import Image from 'next/image'
import React from 'react'
import {MdShoppingBasket} from "react-icons/md"

const MenuItem = () => {
    return (
      <div className="bg-secondary w-[270px] ">
          <div className='w-full bg-primary h-[200px]  grid place-content-center rounded-bl-[46px]  '>
            <div className="relative w-[270px] h-[210px] hover:scale-110 transition-all">
              <Image src="/images/paste.jpg" alt="" layout="fill" objectFit='cover' className=" rounded-bl-[40px]"   />
            </div>
          </div>
          <div className="p-[25px] text-black">
            <h4 className="text-xl font-sans">Salça</h4>
            <p className="text-[13px]">Doğal ürünlerimizden el yapımı salça anne eli değmiş gibi :P.</p>
          
            <div className="flex justify-between items-center mt-4">
             <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'>
              Sepete Ekle<MdShoppingBasket /></button>
             <span className='text-primary font-bold'>200₺</span>
             </div>
          </div>
      </div>
    )
  }

export default MenuItem