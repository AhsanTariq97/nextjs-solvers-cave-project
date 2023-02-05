import React from 'react'
import ContactForm from './ContactForm'
import Button from './Button'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center text-white max-w-screen-xl w-11/12 mx-auto py-12 md:py-32 md:space-x-8 space-y-12 md:space-y-0'>
        <div className='flex flex-col justify-between items-start w-full space-y-4 md:w-1/2 md:max-w-lg'>
            <h1 className='text-2xl lg:text-5xl tracking-tight lg:leading-snug font-[550]'>World’s Leading WordPress Agency for Professional Websites.</h1>
            <ul className='text-sm space-y-2 md:text-base lg:text-xl'>
                <li><i className="text-[#58ae57] text-sm px-2 fa-solid fa-check"></i>A custom-designed website</li>
                <li><i className="text-[#58ae57] text-sm px-2 fa-solid fa-check"></i>Dozens of design concepts to explore</li>
                <li><i className="text-[#58ae57] text-sm px-2 fa-solid fa-check"></i>Full copyright and production ready files</li>
                <li><i className="text-[#58ae57] text-sm px-2 fa-solid fa-check"></i>Unlimited Revisions</li>
            </ul>
            <Link href="/portfolio"><Button bgColor='#58ae57' text='Portfolio' pl='pl-4' icon={faArrowRight} /></Link>
        </div>
        <ContactForm width='w-1/2' />
    </div>
  )
}

export default Hero