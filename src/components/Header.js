"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../assets/mernlogo.png"
import Link from 'next/link'
import { navigation } from '@/constants/data'
import {Menu,X} from "lucide-react"




const Header = () => {
  const [show,setShow]=useState(false);
  return (
    <div className='w-full h-20 bg-designColor'>
    <div className='max-w-screen-xl mx-auto  h-full flex items-center justify-between px-4 xl:px-0 relative'>
    <Link href={'/'}>
    <Image src={logo} alt="logo Image"
    className='w-28'/>
    </Link>
    <ul className='hidden md:flex items-center text-sm uppercase gap-5 font-semibold text-indigo-400'>
     
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
    <div onClick={() => setShow(!show)} className='inline-flex md:hidden text-white cursor-pointer
    hover:text-gray-500'>
{show ? <X/> :<Menu/>}
    </div>
    {
      show && (
        <ul className=' absolute inline-flex md:hidden flex-col items-start text-sm uppercase gap-5 
        font-semibold bg-slate-950 text-indigo-500 right-10 px-7 py-7 top-20'>
     
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

      )
    }
    </div>
      </div>
  )
}

export default Header