import Image from 'next/image'
import Button from './Button'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ isHomePg }) => {
    const [toggle, setToggle] = useState(false)
    const [background, setBackground] = useState('bg-transparent');

    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 50) {
            setBackground('bg-white');
          } else {
            setBackground('bg-transparent');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={`fixed top-0 z-[1] w-full ${background}`}>
            <nav className='relative py-4 w-11/12 mx-auto max-w-screen-xl h-[100px]'>
                <div className='flex flex-row justify-between items-center'>
                    <Link href="/"><Image src={`${isHomePg && background === 'bg-transparent' ? '/Solverscave-logo.webp' : '/Solverscave-green-logo.webp' }`} alt="Solvers Cave Logo" width={180} height={73.05} /></Link>
                    <ul className={`hidden md:flex flex-row justify-center items-center ${isHomePg && background === 'bg-transparent' ? 'text-white' : '' } text-lg tracking-tighter font-[600]`}>
                        <li className='px-4 py-2'><Link href="/">Home</Link></li>
                        <li className='px-4 py-2'><Link href="/portfolio">Portfolio</Link></li>
                        <li className='px-4 py-2'><Link href="/contact-us">Contact Us</Link></li>
                        <li className='pl-4 py-2 font-normal text-base'><Link href="/contact-us"><Button bgColor='#58ae57' text='HIRE ME' /></Link></li>
                    </ul>
                    <div className='flex md:hidden justify-end items-center'>
                        <Image src={toggle ? '/close.svg' : '/menu.svg'} className={`${isHomePg && background === 'bg-transparent' ? '' : 'brightness-0' } cursor-pointer`} width={30} height={30} alt='menu toggle' onClick={() => setToggle(prev => !prev)} />
                        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-24 bg-black/95 w-full align text-center rounded-lg`}>
                            <ul className='flex flex-col justify-center items-center w-full text-white text-lg tracking-tighter font-[600] py-2 mx-8'>
                                <li className='w-full px-6 py-4 border-b-2'><Link href="/">Home</Link></li>
                                <li className='w-full px-6 py-4 border-b-2'><Link href="/portfolio">Portfolio</Link></li>
                                <li className='w-full px-6 py-4'><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
