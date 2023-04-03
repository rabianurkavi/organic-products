import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Title from './Title'
import Image from 'next/image'
import{AiFillCloseCircle} from "react-icons/ai"

const Search = ({setIsSearchModal}) => {
  return (
    <div className="fixed top-0 left-0 position w-screen h-screen z-50  after:content-[''] 
    after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
     <OutsideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
       <div className="w-full h-full grid place-content-center relative ">
         <div className="relative z-50 md:w-[500px] w-[370px] bg-white border-2 p-10 rounded 3-xl">
          <Title addClass="text-[40px] text-center">Arama</Title>
          <input type="text" placeholder="Search..." className="border w-full my-10"/>
            <ul className=''>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">                       
                    <Image src="/images/oil.jpg" alt=" " width={55} height={50}/>
                    </div>
                    <span className="font-bold">Doğal Zeytin Yağı</span>
                    <span className="font-bold">5 Lt</span>
                    <span className='font-bold'>360₺</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">                       
                    <Image src="/images/paste.jpg" alt=" " width={60} height={55}/>
                    </div>
                    <span className="font-bold">El Yapımı Salça</span>
                    <span className="font-bold">5 Kg</span>
                    <span className='font-bold'>110₺</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">                       
                    <Image  src="/images/olive.jpg" alt="" width={60} height={60}/>
                    </div>
                    <span className="font-bold">Hal Hal Zeytin</span>
                    <span className="font-bold">1 Kg</span>
                    <span className='font-bold'>200₺</span>
                </li>
            </ul>
            <button className="absolute top-4 right-4" onClick={()=>setIsSearchModal(false)}>
               <AiFillCloseCircle size={30} className="text-black transition-all hover:text-primary"/>
            </button>
         </div>  
       </div> 
     </OutsideClickHandler>
    </div>
  )
}

export default Search