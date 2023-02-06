import React from 'react'
import Image from 'next/image'
import Button from './Button'
import ContactForm from './ContactForm'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Quotation = ({ sectionHeading, leftSectionHeading, leftSectionPara }) => {
  return (
    <div className='bg-black/80'>
        <Image src={'/quote-bg-image.webp'} alt='Laptop - Quotation section background' width={500} height={400} className='fixed top-[100px] left-0 z-[-1] w-full' />
        <div className='flex flex-col justify-between items-center pt-16 pb-8 w-[90%] max-w-screen-xl mx-auto text-white'>
            <div className='flex flex-col justify-between items-center space-y-4'>
                <h1 className='text-3xl font-bold md:font-bold lg:text-4xl'>{sectionHeading}</h1>
                <p className='text-basetext-center md:text-lg'>Feel free to contact us regarding any queries or questions that you may have.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center pt-8  space-y-8 md:space-x-4 md:space-y-0'>
                <div className='flex flex-col justify-between items-start space-y-4 md:w-1/2'>
                    <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{leftSectionHeading}</h1>
                    <h2 className='text-xxl font-medium md:text-2xl lg:text-3xl'>You wish to evolve in Modern world?</h2>
                    <p className='lg:text-lg'>— Profession development Process</p>
                    <p className='lg:text-lg'>{leftSectionPara.split('\n').map((line, index) => <span key={index}>{line} <br /></span>)}</p>
                    <a href="mailto:info@api.solverscave.com"><Button bgColor='#58ae57'  text='Email Us' pl='pl-4' icon={faPaperPlane} /></a>
                </div>
                <ContactForm width='w-1/2' />
            </div>
        </div>
    </div>
  )
}

export default Quotation