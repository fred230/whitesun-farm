import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Aircondition from '@/public/images/aircondition_services.jpg'
const Services
 = () => {
  return (
    <Layout>
    <div className='flex px-10 min-h-screen  flex-col justify-start items-start'>
      <div className='w-full relative h-96 flex items-start justify-start'>
      <Image src={Aircondition} alt="Background Image" className="rounded-sm" layout='fill' objectFit="cover" />
      </div>
    </div>
  </Layout>
  )
}

export default Services
