import React from 'react'
import './App.css'
import go from '../public/go.svg'




function Works() {
  return (
    <>
      <div className='w-full pt-10'>
        <div className='w-[95%] mx-auto'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-3 text-[#94D82D] '>
              <img src='line.png'></img>
              <p>Services</p>
            </div>
            <div className='lg:w-[40%] w-full '>
              <h1 className='text-4xl  font-normal head '>Some of our crafts made with love</h1>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-between w-full gap-10'>
            <div className='lg:w-[47%] w-full flex flex-col gap-5'>
              <img src='work1.png' className='lg:w-[90%] w-full'></img>
              <div className='flex flex-col gap-2' >
                <h2 className='head text-xl'>Villa Furnishing & Interior</h2>
                <p className='font-light text-[.8rem] md:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
              </div>
            </div>
            <div className='lg:w-[47%] w-full flex flex-col gap-10'>
              <div className='flex flex-col gap-5' >
                <img src='work2.png' className='lg:w-[80%] w-full'></img>
                <div className='flex flex-col gap-2'>
                  <h2 className='head text-xl'>Luxury Hotel Renovation</h2>
                  <p className='font-light text-[.8rem] md:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <img src='work3.png' className='lg:w-[80%] w-full'></img>
                <div className='flex flex-col gap-2'>
                  <h2 className='head text-xl'>Residence Swimming Pool</h2>
                  <p className='font-light text-[.8rem] md:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:pt-0 pt-10'>
            <button className='bg-[#94D82D] px-4 py-2  text-white flex items-center'> Contact <img src={go} /></button>

          </div>

        </div>

      </div>




    </>
  )
}

export default Works