import React from 'react'

const Footer = () => {
  return (
    <footer className="h-96 relative bg-gray-200">
      <div className="absolute right-0 top-16 w-full lg:h-80 flex flex-col bg-black overflow-hidden rounded-tr-3xl justify-center items-center mt-5">
        <div className="flex w-4/6 flex-col lg:flex-row justify-start items-start mt-16 ml-10 space-y-8 lg:space-y-0 lg:space-x-8">

          <div className="text-[#eb5c5b] flex-1">
            <h2 className="font-bold text-xl">About us</h2>
            <ul className="mt-3 text-sm leading-loose cursor-pointer text-white space-y-1">
              <li className="hover:underline">Our Story</li>
              <li className="hover:underline">Leadership</li>
              <li className="hover:underline">Our Impact</li>
            </ul>
          </div>

          <div className="text-[#eb5c5b] flex-1">
            <h2 className="font-bold text-xl">Links</h2>
            <ul className="mt-3 text-sm leading-loose cursor-pointer text-white space-y-1">
              <li className="hover:underline">Book Appointment</li>
              <li className="hover:underline">Get Quotation</li>
              <li className="hover:underline">Services</li>
            </ul>
          </div>

          <div className="text-[#eb5c5b] flex-1">
            <h2 className="font-bold text-xl">FAQS</h2>
            <ul className="mt-3 text-sm leading-loose cursor-pointer text-white space-y-1">
              <li className="hover:underline">Our Policy</li>
            </ul>
          </div>

          <div className="text-[#eb5c5b] flex-1">
            <h2 className="font-bold text-xl">Contacts</h2>
            <ul className="mt-3 text-sm leading-loose cursor-pointer text-white space-y-1">
              <li className="hover:underline">Info@Whitesungroup.com</li>
              <li className="hover:underline">+254 715798843</li>
            </ul>
          </div>

        </div>

        

      </div>
    </footer>
  )
}

export default Footer
