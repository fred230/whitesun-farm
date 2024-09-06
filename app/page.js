import React from "react";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Press from "./components/Home/Press";
import Brands from './components/Home/Brands'
import Customer from "./components/Home/Customer";
import 'remixicon/fonts/remixicon.css'
import About from './components/Home/About'
import FAQ from "./components/Home/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen  flex flex-shrink-0 flex-col   ">
      <div className='flex-grow items-center justify-center'>
      <Hero/>
      <div className=" bg-gray-100 mt-12 min-h-screen w-full flex-col  flex flex-grow items-center justify-start  P-16">
        <About/>
      </div>
       
        <div className="  flex flex-grow ">
          <Brands/>
        </div>
        <div className="pt-16 flex items-center justify-center  w-full " >
          <Services />

        </div>
        <div className="w-full  justify-center items-center flex flex-col">
          <Customer/>
        </div>

        <div className="pt-4 mb-16  w-full justify-center items-center flex bg-black">
        <Press/>

        </div>
        
        <div className="mt-16 mb-16 items-center justify-center  flex bg-white">
        <FAQ/>

        </div>


    </div>
         
    </main>
  );
}
