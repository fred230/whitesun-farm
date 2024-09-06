import React from 'react'

import Image from 'next/image'
import Tecnicians from '@/public/images/about.jpg'
import People from '@/public/images/people.png'
import Twenty from '@/public/images/Twenty.png'
const About = () => {
  return (
    <div className='min-h-screen w-full flex-col  flex flex-grow items-center justify-start  pb-16 pt-16'>
       <div className='w-full lg:w-4/5 shadow-lg p-10 h-full flex items-start justify-center flex-col lg:flex-row gap-20'>
      <div className='flex-1 flex flex-col items-start justify-start text-left font-extrabold '>
        <div className='items-start flex text-[#020c52] justify-start leading-relaxed flex-col text-4xl'>
         
          <div className=''> Whitesun <span className='text-[#eb5c5b]'>Holdings</span></div>
        </div>
        <div className='items-start ml-2 text-[#020c52] mt-3  text-xl font-normal flex justify-start leading-relaxed flex-col '>
          
          We are your trusted partner for a wide spectrum of services. From cutting-edge air conditioning solutions to innovative interior designs, we deliver excellence across industries. Discover the power of Whitesun—where expertise meets reliability.

          
        </div>
        <div className='flex my-10 items-start justify-start   '>
          <Image src={Tecnicians} alt='whitesun technicians' layout='cover' className='rounded-md'/>
          
          

        </div>
       

      </div>
      <div className='flex-1 flex flex-col  items-start justify-start text-left  '>
        <div className='flex flex-1 items-start lg:mt-32 mt-2 justify-start'>
        <div className='font-extrabold text-[#020c52] leading-snug text-3xl'>
            Best HVAC, Electrical and Mechanical Fittings Solution in One Place
            </div>
          

        </div>
          <div className='divide-y mt-10 mb-2 bg-slate-100 border w-full'></div>
        <div className=' ml-2 mt-2 flex flex-col h-44 items-start justify-start'>
            <Image src={People} alt='whitesun technicians' height={70} width={70}  className=''/>
            <div className='text-[#020c52] text-xl font-bold mt-2 mb-2'> Professional Team</div>
            <div className='text-base pb-3'>At Whitesun, our seasoned professionals bring expertise to every project. From air conditioning to interior design, trust our team to deliver excellence</div>
          

        </div>
          <div className='divide-y mt-10 mb-2 bg-slate-100 border w-full'></div>
        <div className=' ml-2 flex mt-2 flex-col h-44 items-start justify-start'>
            <Image src={Twenty} alt='whitesun technicians' height={70} width={70}  className=''/>
            <div className='text-[#020c52] font-bold text-xl mt-2 mb-2'> 24/7 Availability</div>
            <div>Experience uninterrupted service with Whitesun. Our team is available around the clock, ensuring your needs are met anytime, anywhere.</div>

        </div>
        <div className='divide-y mt-10 mb-2 bg-slate-100 border w-full'></div>
        <div className=' ml-2 flex flex-row items-start w-4/5 mt-3 justify-between hover:text-[#eb5c5b]'>
          <button>
            More About us
          </button>
          <div className='text-sm  ml-6 mt'><i class="ri-arrow-right-line mb-1"></i></div>
        </div>
        

      </div>
        
    </div>
    </div>
  )
}

export default About