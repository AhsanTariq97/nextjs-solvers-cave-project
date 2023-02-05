import { FaHome, FaAtlas, FaRegUser, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import Button from './Button';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-white'>
        <div className='flex flex-col justify-evenly items-center w-[95%] max-w-screen-xl mx-auto py-8 md:py-16 space-y-4 md:space-y-0 md:flex-row md:items-start'>
            <Image src={'/Solverscave-green-logo1.webp'} width={200} height={75} alt='Solvers Cave Logo' />
            <div className='flex flex-row justify-around items-center pb-2 w-full max-w-lg'>
                <div className='flex flex-col justify-between items-start space-y-2'>
                    <h1 className='text-lg font-semibold lg:text-2xl'>Quick Links</h1>
                    <Link href="/" className='flex flex-row items-center justify-start hover:text-[#58ae57] text-black'><FaHome size={16} /><p className='pl-2 text-sm lg:text-base'>Home</p></Link>
                    <Link href="/portfolio" className='flex flex-row items-center justify-start hover:text-[#58ae57] text-black'><FaAtlas size={16} /><p className='pl-2 text-sm lg:text-base'>Portfolio</p></Link>
                    <Link href="/contact-us" className='flex flex-row items-center justify-start hover:text-[#58ae57] text-black'><FaRegUser size={16} /><p className='pl-2 text-sm lg:text-base'>Contact Us</p></Link>
                </div>
                <div className='flex flex-col justify-between items-start space-y-2'>
                    <h1 className='text-lg font-semibold lg:text-2xl'>WordPress Services</h1>
                    <p className='text-sm lg:text-base hover:text-[#58ae57] text-black'>WordPress Fitness Websites</p>
                    <p className='text-sm lg:text-base hover:text-[#58ae57] text-black'>WordPress maintenance</p>
                    <p className='text-sm lg:text-base hover:text-[#58ae57] text-black'>WordPress migration</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center min-w-max space-x-6 space-y-0 md:flex-col md:space-x-0 md:space-y-4 md:items-start'>
                <h1 className='hidden text-xl font-semibold lg:text-2xl sm:block'>Follow Us</h1>
                <div className='flex justify-between items-center md:w-full space-x-2'>
                    <a href="https://www.facebook.com/wearesolverscave"><FaFacebook size={24} className='hover:text-[#58ae57] text-black' /></a>
                    <a href="https://www.instagram.com/solverscaveofficial/?hl=en"><FaInstagram size={24} className='hover:text-[#58ae57] text-black' /></a>
                    <a href="https://www.linkedin.com/company/wearesolverscave/"><FaLinkedinIn size={24} className='hover:text-[#58ae57] text-black' /></a>
                    <a href="https://wa.me/03366607660"><FaWhatsapp size={24} className='hover:text-[#58ae57] text-black' /></a>
                </div>
                <Button bgColor='#58ae57' text='Email Us' pl='pl-4' icon={faPaperPlane} />
            </div>
        </div>
    </div>
  )
}

export default Footer