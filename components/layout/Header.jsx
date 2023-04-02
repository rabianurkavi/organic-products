import React from 'react'
import { useState } from "react"
import Logo from '../ui/Logo'
import {FaShoppingCart,FaSearch} from "react-icons/fa"
import Search from '../ui/Search'

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
  return (
   <div className="h-[5.5rem] bg-secondary font-dosis">
    <div className="container mx-auto text-black flex justify-between items-center h-full">
        <Logo/>
      <nav>
       <ul className='flex gap-x-2 '>
        <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
            <a href="">Ana Sayfa</a>
        </li>
        <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
            <a href="">Hakkında</a>
        </li>
        <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
            <a href="">Alışveriş</a>
        </li>
        <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
            <a href="">Galeri</a>
        </li>
        <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
            <a href="">İletişim</a>
        </li>
       </ul>
      </nav>
      <div className="flex gap-x-6 items-center px-[50px] ">
        <button className="hover:text-primary cursor-pointer" onClick={()=>setIsSearchModal(true)}>
            <FaSearch style={{ fontSize: "20px" }}/>
        </button>
        <a className="hover:text-primary cursor-pointer" href="#">
            <FaShoppingCart style={{ fontSize: "20px" }}/>
        </a>

      </div>
    </div>
    {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
    )}
   </div>
  )
}

export default Header
