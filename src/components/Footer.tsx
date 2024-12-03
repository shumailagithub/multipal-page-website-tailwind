import { Button } from './ui/button'
import { Input } from './ui/input'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constant/footerLinks'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <>
            <footer className='
            w-full 
            px-[24] py-[48px] xsm:p-[80px] 
            flex 
            flex-col
            gap-[80px]
            text-center xsm:text-start
            '>
                {/* Top Div */}
                <div className='
                w-full 
                flex 
                flex-col xsm:flex-row 
                justify-between 
                items-center
                '>

                    <div className='w-[287px] xsm:w-auto flex flex-col xsm:flex-row'>
                        <p className='
                        text-[18px]
                        w-[287px] xsm:w-auto
                        gap-4
                        leading-[150%] 
                        font-semibold
                        mt-[2px] xsm:mt-0
                    
                        
                        
                        '>Subscribe to our newsletter<br /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='flex gap-4 flex-col mt-[24px] xsm:mt-0'>

                        <div className='
                        flex flex-col xsm:flex-row
                        gap-4'>
                            <Input placeholder='Enter your email' className='w-full xsm:w-[268px] h-[48px] border-[black]' />
                            <Button variant={'transparentBtn'} className='w-full xsm:w-auto'>Subscribe</Button>
                        </div>
                        <p className='text-[12px] leading-[18px]'>By subscribing you agree to with our Privacy Policy</p>
                    </div>
                </div>


                {/* Middle Div */}
                <div className='w-full flex flex-col xsm:flex-row gap-10 text-center py-[80px]'>
                    <div className='xsm:w-[250px] h-[40p] inline-block xsm:block m-auto xsm:m-0'>
                        <Image src='/logo.png' alt='logo' width={130} height={40}></Image>
                    </div>

                    {footerLinks.map((item, index) => {
                        return (
                            <div className='w-[250px]  flex flex-col gap-4 m-auto xsm:text-start' key={index}>
                                <h4 className='text-[16px] leading-[150%] font-semibold'>{item.headeing}</h4>

                                <ul className='flex flex-col gap-2'>
                                    <li><Link href='#!'>{item.l1}</Link></li>
                                    <li><Link href='#!'>{item.l2}</Link></li>
                                    <li><Link href='#!'>{item.l3}</Link></li>
                                    <li><Link href='#!'>{item.l4}</Link></li>
                                    <li><Link href='#!'>{item.l5}</Link></li>
                                </ul>
                            </div>
                        )
                    })}


                </div>


                {/* Bottom Div */}
                <div className='
                w-full 
                h-auto xsm:h-[57px] 
                flex 
                flex-col xsm:flex-row
                justify-between 
                items-end 
                border-t-[1px] 
                border-black
                pt-[32px] xsm:pt-0
                text-center
                '>
                    <div className='flex flex-col xsm:flex-row gap-[24px]'>
                        <p>2023 Ddsgnr. All right reserved.</p>

                        <div className='flex gap-[24px]'>
                            <Link href={'#!'}>Privacy Policy</Link>
                            <Link href={'#!'}>Terms of Service </Link>
                            <Link href={'#!'}>Cookies Settings </Link>
                        </div>


                    </div>


                    <div className='flex justify-center items-center gap-[12px] m-auto xsm:m-0 mt-[24px] xsm:mt-0'>
                        <FaFacebookF size={24} />
                        <FaInstagram size={24} />
                        <FaXTwitter size={24} />
                        <FaLinkedinIn size={24} />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

