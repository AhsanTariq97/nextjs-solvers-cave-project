import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Business from '@/components/Business'
import Portfolio from '@/components/Portfolio'
import ClientsFeedback from '@/components/ClientsFeedback'
import Quotation from '@/components/Quotation'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div className='relative overflow-hidden scroll-smooth'>
      <Head>
        <title>SolversCave</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[url(../public/Solverscave-banner-bg.webp)] bg-left-top bg-cover bg-no-repeat'>
        <div className='py-[40px]'></div>
        <Navbar isHomePg={true} />
        <Hero />
        <div className='border-t-2 border-white py-4 bg-black/40'>
          <Carousel />
        </div>
      </div>
      <Business />
      <Portfolio isPortfolioPg={false} heading='Solutions That Put The Businesses On Right Path' text='Our team of professional web designers focuses on clients and their specific needs to maintain the highest possible customer satisfaction. The ultimate goal of our custom website design services & custom website development services is customer satisfaction and this is one of the many reasons why our work is internationally recognized.' />
      <ClientsFeedback />
      <Quotation sectionHeading='Get a Quick Quote' leftSectionHeading={`The best way to predict the future is to create it, Let's Start`} leftSectionPara='We specializes in creating custom websites for businesses and organizations. This can include designing and developing a website from scratch, as well as implementing custom functionality and integrating with third-party tools.' />
      <Footer />
    </div>
  )
}
