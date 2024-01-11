import React from 'react'
import './App.css'

function about() {
  return (
  <div className='w-full '>
   <div className='flex lg:flex-row flex-col pt-20 pb-20 justify-between w-[95%] mx-auto '>
   <div className='lg:w-[48%] md:w-full h-full'>
        <div className='flex items-center gap-3 text-[#94D82D]'>
            <img src='line.png'></img>
            <p>About Us</p>
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl  font-normal head'>We help to bring your dream home to reality</h1>
            <p className='text-[.9rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ex consectetur iste tempora animi hic velit aspernatur unde voluptatum dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quaerat.</p>
            <p className='text-[.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt rem quis perspiciatis quia ut, aliquid iusto dignissimos laboriosam cupiditate nemo harum deleniti reiciendis! Quam, placeat qui numquam doloribus deserunt voluptatum iure modi. Voluptatum delectus, debitis vero unde ipsa exercitationem eaque asperiores voluptatem mollitia veniam quos alias, voluptate ab enim.</p>
        </div>
    </div>
    <div className='flex lg:w-[48%] w-full md:pt-[40%] pt-[70%] lg:pt-0 gap-5  items-center relative'>
        <div className='w-[48%] h-[380px] absolute'>
        <img src='about1.png' className='w-full h-full'></img>
        </div>
        <div className='w-[48%] h-[380px] absolute lg:left-[55%] md:left-[50%] left-[52%]  lg:top-[20%] md:top-[55%] top-[50%]'>
        <img src='about2.png' className='w-full h-full'></img>
        </div>
       
   
    </div>
   </div>
  </div>
 
  )
}

export default about