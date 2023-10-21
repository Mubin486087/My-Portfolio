import React from 'react'
import Bannerimg from "../assets/Banner.png"
import Image from 'next/image'
import Container from './Container'

const Banner = () => {
  return (
   <Container>
     <div className='flex flex-col sm:flex-row items-center  text-indigo-500'>
<div className='w-full sm:w-1/2 flex flex-col gap-2'>
    <h2 className='text-2xl font-semibold'>MD MUBIN</h2>
    <h3 className='text-lg font-medium'>Web-Developer</h3>
    <p className='text-base tracking-wide'>I am a mern stack developer working at peopleNtech. I specialized in Reactjs,Reactjs,
        Nodejs,MongoDB,TailwindCSS, and many more.
    </p>
    <a href="/resume.png">
        <button className=' w-20 h-10 bg-slate-900 font-semibold hover:bg-lime-900 
    hover:text-white cursor-pointer duration-200 rounded-sm'>Hire Me</button>
    </a>
</div>
<div className='w-1/2 flex items-center justify-center'>
    <Image src={Bannerimg} alt="banner image"
    className=' h-80 w-80 object-contain rounded-full'/>
    </div>

    </div>
    
   </Container>

  )
}

export default Banner