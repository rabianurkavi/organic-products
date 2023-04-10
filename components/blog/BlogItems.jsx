import Image from 'next/image'
import React from 'react'
import {BsFillSuitHeartFill} from "react-icons/bs"
import {AiOutlineEye} from "react-icons/ai"
import {FaCommentDots} from "react-icons/fa"
const BlogItems1 = () =>{
    return (
        <div className="bg-white h-[480px] w-[300px]  ">
            <div className='w-full h-[180px] grid place-content-center '>
              <div className="relative w-[300px] h-[270px] hover:scale-110 transition-all">
                <Image src="/images/blog-img.jpg" alt="" layout="fill" objectFit='cover' className=""   />
              </div>
            </div>
            <div className="p-[25px] text-black py-16">
              <h4 className="text-[15px] font-dosis font-bold">Sebzelerin faydaları</h4>
              <p className="mt-2 text-[13px] text-[#666666] font-dosis">Bitkilerin her türlü yenebilen kısmı sebze ve meyve grubu altında toplanır. Sebze ve meyveler; mineraller ve vitaminler bakımından zengindirler. Folik asit, A vitaminin ön öğesi olan beta-karoten, E, C, B2 vitamini, kalsiyum, potasyum, demir, magnezyum, posa ve diğer antioksidan özelliğe sahip bileşikler yönünden de zengindirler.</p>
              <div className="flex items-center mt-4 gap-x-2">
               <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><BsFillSuitHeartFill/>
                </button>
                <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><AiOutlineEye/>
                </button>
                <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><FaCommentDots/>
                </button>
               
               </div>
            </div>
        </div>
    )
}
const BlogItems2 = () =>{
    return (
        <div className="bg-white h-[480px] w-[300px]  ">
            <div className='w-full h-[180px] grid place-content-center '>
              <div className="relative w-[300px] h-[270px] hover:scale-110 transition-all">
                <Image src="/images/blog-img-01.jpg" alt="" layout="fill" objectFit='cover' className=""   />
              </div>
            </div>
            <div className="p-[25px] text-black py-16">
              <h4 className="text-[15px] font-dosis font-bold">Sağlıklı beslenmenin yolları</h4>
              <p className="mt-2 text-[13px] text-[#666666] font-dosis">Yaklaşmakta olan yaz günleri pek çok kişiyi “kilo verme” düşüncesine itiyor. Etiler Memorial Polikliniği İç Hastalıkları Bölümü Uzmanları, kilo verirken yapılan hatalardan uzaklaşmak için dengeli ve sağlıklı beslenmenin bir yaşam biçimi olarak benimsenmesinin doğru olacağını belirterek konuyla ilgili ayrıntılı bilgi verdi.</p>
              <div className="flex items-center mt-4 gap-x-2">
               <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><BsFillSuitHeartFill/>
                </button>
                <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><AiOutlineEye/>
                </button>
                <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><FaCommentDots/>
                </button>
               
               </div>
            </div>
        </div>
    )
}
const BlogItems3 = () =>{
    return (
        <div className="bg-white h-[480px] w-[300px]  ">
            <div className='w-full h-[180px] grid place-content-center '>
              <div className="relative w-[300px] h-[270px] hover:scale-110 transition-all">
                <Image src="/images/blog-img-02.jpg" alt="" layout="fill" objectFit='cover' className=""   />
              </div>
            </div>
            <div className="p-[25px] text-black py-16">
              <h4 className="text-[15px] font-dosis font-bold">A Vitamini Eksikliği</h4>
              <p className="mt-2 text-[13px] text-[#666666] font-dosis">Vücutta A vitamininin eksik olması durumunda çeşitli göz ve görme sorunları ortaya çıkabilir. Bu sorunlar arasında düzelebilir gece körlüğü ve geri dönüşü olmayan kornea hasarı olan kseroftalmi bulunur. A vitamini eksikliği aynı zamanda hiperkeratoza veya kuru, pullu cilde yol açabilir.</p>
              <div className="flex items-center mt-4 gap-x-2 py-5">
               <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><BsFillSuitHeartFill/>
                </button>
                <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><AiOutlineEye/>
                </button>
                <button className='btn-black flex items-center gap-2 font-sans font-semibold hover:bg-primary'><FaCommentDots/>
                </button>
               
               </div>
            </div>
        </div>
    )
}
const BlogItems = () => {
    return (
    <div className='container mx-auto flex justify-center gap-x-5 py-10 '>
       <BlogItems1 />
       <BlogItems2 />
       <BlogItems3 />
    </div>
      )
}

export default BlogItems