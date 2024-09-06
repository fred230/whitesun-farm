import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ai from '@/public/images/ai.jpg'
import Clothing from '@/public/images/clothing.jpg'
import Electronics from '@/public/images/electro.jpg'
import Hotels from '@/public/images/hotels.jpg'
const Blog = () => {
  return (
    <div className='bg-white p-16'>
      <div className='items-center justify-center flex flex-col pb-5'>
      <div className=' w-full lg:w-4/5 shadow-lg pb-10'>
      <div className='text-left text-[#020c52] w-full p-10  ml-4 flex flex-col mb-2 '>
        <div className='font-bold text-4xl'>Press</div>
        <p className='text-left mt-2 leading-relaxed font-normal text-xl'>Explore our informative blog posts covering topics related to cold rooms, HVAC solutions, and electrical installations.   </p>
        
      </div>
      <div className= 'grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 p-2 '>

        {/* First row */}
        <div className='flex  flex-col  shadow-sm  '>
          

                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              
              
                  <div className="relative h-[468px] w-full">
                    <Image src={Ai} layout="fill" objectFit="cover" alt="Card image" />
                    <div className="absolute bottom-10 left-0 text-[#eb5c5b] px-2 py-1 text-xs font-bold uppercase">
                      
                      <Link href='' className=' ml-4 flex flex-row hover:underline '>
                        <div className='mt-1'>Read More</div>
                        <div className='text-sm  ml-6'><i class="ri-arrow-right-line mb-1"></i></div>
                        

                      </Link>
                    </div>
                  </div>
                
            

            </div>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">What the AI wave
                  mean for small businesses</p>
              </div>

         
            </div>

         {/* second row */}
        <div className='flex w-full h-full gap-3 flex-col mt-2 '>

          {/* col 1 */}

          <div className='grid grid-cols-2 h-auto lg:h-[156px] shadow-sm   '>

                  <div className="max-w-sm rounded overflow-hidden m-4">
                      
                      
                      <div className="relative h-full w-full">
                        <Image src={Clothing} layout="fill" objectFit="cover" alt="Card image" />
                        <div className="absolute bottom-10 left-0 text-[#eb5c5b] px-2 py-1 text-xs font-bold uppercase">
                        </div>
                      </div>
                    
                

                  </div>
                  <div className="px-6 py-4 text-left text-gray-700 flex items-start flex-col justify-center">
                    <p className=" text-base">
                    How Whitesun is reimagining fabric
                          design
                      </p>
                      <Link href='' className='  flex text-[#eb5c5b] items-center justify-end flex-row hover:underline '>
                            <div className='mt-1'>Read More</div>
                            <div className='text-sm  ml-6 mt'><i class="ri-arrow-right-line mb-1"></i></div>
                            

                          </Link>
                  </div>


          </div>

          {/* col 2*/}
          <div className='grid grid-cols-2 lg:h-[156px] h-auto shadow-sm'>

          <div className="max-w-sm rounded overflow-hidden  m-4">
                      
                      
                      <div className="relative h-full w-full">
                        <Image src={Electronics} layout="fill" objectFit="cover" alt="Card image" />
                        <div className="absolute bottom-10 left-0 text-[#eb5c5b] px-2 py-1 text-xs font-bold uppercase">
                        </div>
                      </div>
                    
                

                  </div>
                  <div className="px-6 py-4 text-left text-gray-700 flex items-start flex-col justify-center">
                    <p className=" text-base">Why you should purchase your Electronic gadgets with Whitesun</p>
                      <Link href='' className='  flex text-[#eb5c5b] items-center justify-end flex-row hover:underline '>
                            <div className='mt-1'>Read More</div>
                            <div className='text-sm  ml-6 mt'><i class="ri-arrow-right-line mb-1"></i></div>
                            

                          </Link>
                  </div>


          </div>
          <div className='grid grid-cols-2 h-auto lg:h-[156px] shadow-sm'>

          <div className="max-w-sm rounded overflow-hidden  m-4">
                      
                      
                      <div className="relative h-full w-full">
                        <Image src={Hotels} layout="fill" objectFit="cover" alt="Card image" />
                        <div className="absolute bottom-10 left-0 text-[#eb5c5b] px-2 py-1 text-xs font-bold uppercase">
                        </div>
                      </div>
                    
                

                  </div>
                  <div className="px-6 py-4 text-left text-gray-700 flex items-start flex-col justify-center">
                    <p className=" text-base">Secure your next home with us</p>
                      <Link href='' className='  flex text-[#eb5c5b] items-center justify-end flex-row hover:underline '>
                            <div className='mt-1'>Read More</div>
                            <div className='text-sm  ml-6 mt'><i class="ri-arrow-right-line mb-1"></i></div>
                            

                          </Link>
                  </div>


          </div>

         


        </div>
      </div>
     
      </div>
    </div>
    </div>
  )
}

export default Blog