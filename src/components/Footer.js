'use client'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../assets/mernlogo.png"
import { navigation, services } from '@/constants/data'
import {Facebook, facebook} from "lucide-react"
const Footer = () => {
  return (
    <div className=''>
      <Container className='bg-black text-indigo-50 mt-10 grid grid-cols-4 gap-10'>
     <div> 
      <Link href={'/'}>
    <Image src={logo} alt="logo Image"
    className='w-28'/>
    </Link>
    <p>My first portfolio with next.js vscode node.js My first portfolio with next.js vscode node.js
    My first portfolio with next.js vscode node.js My first portfolio with next.js vscode node.js
    </p>
    </div>
     
     <ul className='flex flex-col items-start  text-sm uppercase gap-5 font-semibold text-indigo-400'>
     
     {
       navigation.map((item)=>(
        <Link key={item.title} href={item.href}>
        <li className=' hover:text-indigo-50 cursor-pointer duration-300 relative group overflow-hidden'>
         {item.title}
     <span className='h-[1px] w-full bg-indigo-400 inline-flex absolute left-0 bottom-0
     -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'/>
     </li>
    </Link>
       ))
     } 
   </ul>
   <ul className='flex flex-col items-start  text-sm uppercase gap-5 font-semibold text-indigo-400'>
     
     {
       services.map((item)=>(
       
        <li
        key={item.title}
        className=' hover:text-indigo-50 cursor-pointer duration-300 relative group overflow-hidden'>
         {item.title}
     <span className='h-[1px] w-full bg-indigo-400 inline-flex absolute left-0 bottom-0
     -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'/>
     </li>
    
       ))
     } 
   </ul>
     
     <div>
      <p>Contact Me With</p>
      <ul>
       <a href="https://www.facebook.com/profile.php?id=100041614459848">
        <li className='w-8 h-8 bg-white text-teal-700 flex items-center justify-center
        hover:bg-lime-400 hover:text-cyan-800 duration-300 cursor-pointer'>
          <Facebook/>
        </li>
        </a>
      </ul>
     </div>
     
  
      </Container>
        </div>
  )
}

export default Footer