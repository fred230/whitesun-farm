import React from 'react'


const About = () => {
  return (
    <div className=''>
    {/* Hero */} {/**/}
    <div class="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full gap-8   md:w-1/2">
        <div className=' w-full p-0 md:p-10 shadow-none md:shadow-2xl'>
        <h2 className="text-sm uppercase text-gray-500 mb-2">WHO WE ARE</h2>
          <h1 className="text-3xl tracking-wide md:text-4xl lg:text-5xl  font-bold mb-4">
            Beautiful landscapes and the farmers Who bring us our food
          </h1>
          <p className="text-gray-600 tracking-wider mb-6">
            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In
            on my jointure horrible margaret suitable he followed speedily. Indeed
            vanity excuse or mr lovers of on.
          </p>
          <button className="bg-white text-black border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            More About
          </button>
          
          
        </div>

        <div className="flex mt-8 p-0 md:p-10 shadow-current gap-12">
            <div>
              <h3 className="text-4xl md:text-7xl font-bold">8600+</h3>
              <p className="text-sm text-gray-600">Tons of harvesta</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-7xl font-bold">100%</h3>
              <p className="text-sm text-gray-600">Organic Product</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1701043330162-5fb982554ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxmYXJtJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
            alt="Farm landscape"
            width={600}
            height={400}
            className="rounded-lg h-auto md:h-[46rem]"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white p-4 rounded-lg">
            <h3 className=" text-4xl md:text-7xl font-bold">36+</h3>
            <p className="text-sm">Years of experience</p>
          </div>
        </div>
      </div>
    </div>

    
     
     
      </div>
      
    
  </div>
  )
}

export default About