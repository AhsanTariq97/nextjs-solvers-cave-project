import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
// import customWeb from '../public/custom-web.webp'

const Business = () => {
  return (
    <div className="bg-white">
      <div className='flex flex-col md:flex-row justify-between items-center max-w-screen-xl w-11/12 mx-auto py-12 lg:py-24 sm:space-y-8 md:space-y-0 md:space-x-8'>
          <div className="flex flex-col justify-between items-start space-y-4 md:w-1/2">
              <h2 className="text-lg text-[#0cccb6] bg-[#E4FAF7] px-6 py-2 font-semibold rounded-full w-max">DESIGN IS POWERFUL</h2>
              <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Create A Professional Custom Web Design That Boost Your Business Online!</h1>
              <p className="text-sm pb-4 md:text-base">We are a professional website design and development wordpress agency, we have a team of experienced developers and designers who are skilled in using WordPress to create custom websites.</p>
              <p className="text-sm md:text-base">We also have experience working with a variety of different industries and businesses. We are able to work with you to understand your unique requirements and create a website that is tailored to your specific needs.</p>
              <div className="flex flex-row justify-evenly md:justify-start items-center space-x-12 w-full">
                  <Link href='/contact-us'><Button bgColor='#58ae57' text='Chat With Us' /></Link>
                  <a href="mailto:info@api.solverscave.com"><Button bgColor='#58ae57' text='Email Us' /></a>
              </div>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
              <Image src='/cutom-web.webp' alt='Business deal' width={550} height={300} />
          </div>
      </div>
    </div>
  )
}

export default Business