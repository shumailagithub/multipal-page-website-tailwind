import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import Image from 'next/image'
import Link from 'next/link';
import { Button } from './ui/button';


export default function Header() {
  return (
    <>
      <header className='w-full overflow-x-hidden flex flex-col gap-[16px]'>

        {/* Top Div */}
        <div className='w-full bg-headerColor h-[54px] px-[62px] 
        xsm:flex justify-between 
        items-center hidden border-b-[1px] border-[black]'>
          
          
          
          <div className='h-[30px] flex justify-center items-center gap-[16px] 
        text-[14px] leding-[50%]'>
            <p>Phone Number: 987 456 356 978</p>
            <div className='w-[1px] h[30px] bg-[#676767]'></div>
            <p>Email: info@adda.com</p>
          </div>

          <div className='flex justify-center items-center  gap-[12px] '>
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaXTwitter size={24} />
            <FaLinkedinIn size={24} />
          </div>
        </div>


        {/* Bottom Div */}
        <div className='w-full h-[72px] bg-headerColor xsm:px-[64px] py-[16px] flex 
        justify-between items-center px-[24] border-b-[1px] border-[black] '>
          <Image src="/logo.png" alt="Logo" width={131} height={41} />

          <div className='xsm:flex justify-between items-center gap-[32] hidden '>
            <ul className='flex gap-[52px] justify-center items-center text-[16px]'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/testimonial'>Testimonial</Link></li>
            </ul>

            <div className='flex justify-center items-center gap-[16px]'>
              <Button variant={'transparentBtn'}>Login</Button>
              <Button>Sign Up</Button>
            </div>

          </div>


        
          <IoMenu size={24} className='xsm:hidden'/>
        </div>

      </header>
    </>
  )
}
