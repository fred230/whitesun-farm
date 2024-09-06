import React from 'react'



const Hero
 = () => {
  return (

    <div className=''>
      {/* Hero */} {/**/}
      <div class=" items-center flex justify-center w-full">

      <div className="relative w-full h-screen bg-cover bg-fixed bg-center zoom-out" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604267052388-6e0f2a0e4ea0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZhcm0lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative  z-10  flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold max-w-7xl sm:text-6xl md:text-7xl">Organic & Agricultural <br/> products</h1>
        <p className="mt-4 text-lg sm:text-xl">for Innovative farm implements and delicious farm produce </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 text-lg font-semibold rounded-full text-white bg-green-500 hover:bg-green-600">
            Discover More
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
        </div>
      </div>
    </div>
       
       
        </div>
        
      
    </div>
    
    
  )
}

export default Hero
