// components/Layout.js
import React from 'react';
import  BreadCrumb from './BreadCrumb';
import Image from 'next/image';
import Sidebar from './Sidebar';

import hvac2 from '@/public/images/hvac2.jpg'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col'>
        <div className='w-full relative h-72 flex items-center justify-center '>
        <Image src={hvac2} alt="Background Image" className="rounded-sm" layout="fill" objectFit="cover" />
        <div className='absolute w-full h-full bg-black opacity-50'></div>

        <div className='absolute  flex items-center justify-center'>
            <BreadCrumb />
        </div>

        </div>
        <div className='h-16 w-full bg-white'>

        </div>


        
    
    <div className='flex md:flex-row flex-col'>
          {/* Sidebar */}
      <aside className='md:w-4/12 w-full h-72 flex   overflow-y-auto items-center justify-center'>
      <Sidebar/>
      </aside>

      {/* Main content */}
      <main className='md:w-8/12 w-full '>{children}</main>

    </div>
    </div>
  );
};

export default Layout;
