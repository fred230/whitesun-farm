import React from 'react'


const Press = () => {
  return (
    <div className='items-center justify-center flex flex-col  pb-5'>
  <div className=' w-11/12  px-8'>
  <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold leading-9 text-gray-100">Latest Blog</h1>
                <p className="text-base leading-6 text-center text-gray-100 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
                <div className="relative flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm18ZW58MHx8MHx8fDA%3D" alt="chair" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white">The Essence of Whitesun Farm</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">At Whitesun Farm, we are dedicated to providing the freshest produce and highest quality dairy products. Our sustainable farming practices ensure that our offerings are both delicious and environmentally friendly.</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJ8ZW58MHx8MHx8fDA%3D" alt="chair" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-white">Discover the Purity of Stanley Water</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">Stanley Water, sourced from natural springs, is renowned for its purity and refreshing taste. Each drop undergoes rigorous testing to meet the highest standards of quality.</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="https://plus.unsplash.com/premium_photo-1679765926730-78765a8b7802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VlZGxpbmdzfGVufDB8fDB8fHww" alt="chair" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">Your Gardening Partner: Seedlings Hub</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">Our Seedlings Hub offers a wide variety of high-quality seedlings to help you start your garden. Our experts are always available to provide advice and support for your planting needs.</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
  </div>
</div>
     
      
  )
}

export default Press
