import Image from "next/image"
import Title from "./Title"
const OrganicProduct=()=>{
    return(
        <div className="">
            <div className="">
                <div className="relative w-60 h-60 after:conten-[''] border-[] border-primary">                          
                      <Image src="/images/oil.jpg" className="hover:scale-105 transition-all" alt="" layout="fill" />    
                </div>
                <div className="">
                <button className="btn-primary justify-center w-full h-full flex items-center hover:bg-black ">Zeytin Yağı </button>
                </div>
            </div>
        </div>
    )
}
const OrganicProduct2=()=>{
    return(
        <div className="">
            <div className="">
                <div className="relative w-60 h-60 after:conten-[''] border-[] border-primary">                          
                      <Image src="/images/olive.jpg" className="hover:scale-105 transition-all" alt="" layout="fill" />    
                </div>
                <div className="">
                <button className="btn-primary justify-center w-full h-full flex items-center hover:bg-black font-poppins ">Zeytin </button>
                </div>
            </div>
        </div>
    )
}
const OrganicProduct3=()=>{
    return(
        <div className="">
            <div className="">
                <div className="relative w-60 h-60 after:conten-[''] border-[] border-primary">                          
                      <Image src="/images/paste.jpg" className="hover:scale-105 transition-all" alt="" layout="fill" />    
                </div>
                <div className="">
                <button className="btn-primary justify-center w-full h-full flex items-center hover:bg-black ">Salça </button>
                </div>
            </div>
        </div>
    )
}

const OrganicProductList = () => {
  return (
    <div className="flex justify-center container mx-auto px-20 py-40 flex-wrap gap-x-9  ">
        <OrganicProduct />
        <OrganicProduct2 />
        <OrganicProduct3 />
    </div>
  )
}

export default OrganicProductList