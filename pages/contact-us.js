import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Quotation from "@/components/Quotation"

export default function PortfolioSection() {
    return (
        <div>
            <div className='py-[50px]'></div>
            <Navbar isHomePg={false} />
            <Quotation sectionHeading='Contact Us' leftSectionPara={`We specializes in creating custom websites for businesses and organizations. This can include designing and developing a website from scratch, as well as implementing custom functionality and integrating with third-party tools.\n
                We work closely with with our clients to understand their needs and goals and create a website that meets their specific requirements. We can also provide ongoing maintenance and support for the website as well. We are a custom website agency, we can provide a wide range of services including Website Design, Development, E-commerce solutions, CMS integration, website optimization, and digital marketing services.\n
                We have a team of experts in various fields like web design, web development, digital marketing, social media management and other areas that are required to create a custom unique and professional websites.`} />
            <Footer />
        </div>
    )
  }