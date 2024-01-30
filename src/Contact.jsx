import React from 'react'
import './App.css'

function Contact() {
  return (
      <>
          <div className='w-full py-10'>
              <div className='w-[95%] mx-auto flex lg:flex-row flex-col justify-between gap-5 pb-10'>
                  <div className='lg:w-[34%] w-full'>
                      <h1 className='lg:text-4xl text-3xl  font-normal head '>Kick-start your dream home with us</h1>
                      <h2 className=' lg:text-3xl text-2xl italic text-[#94D82D]   font-normal head'> Send us a hi</h2>
                  </div>
                  <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-3'>
                          <p className='head lg:text-3xl text-2xl font-normal'>IBADAN, OYO STATE</p>
                          <p className='lg:text-[1rem] text-[.9rem] font-light'>No1, Road2, Maberi/Idi-ishin, Liberty academy, <br/>Odo-ona elewe, Orita Challlenge.</p>
                      </div>
                      <div  className='flex flex-col gap-3'>
                          <p className='lg:text-[1.2rem] text-2xl font-light'>Email us at</p>
                          <p className='head text-[#94D82D] text-2xl  lg:text-3xl font-normal'>bamarchitectco@gmail.com</p>
                      </div>
                      <div  className='flex flex-col gap-3'>
                          <p className='lg:text-[1.2rem] text-xl font-light'>If you're hurry, quick call for us</p>
                          <p className='head text-[#94D82D] text-2xl  lg:text-3xl font-normal'>+234-70-301-733-70</p>
                      </div>
                  </div>
              </div>
              <hr/>
          </div>
      
      
      
      
      
      
      </>
  )
}

export default Contact