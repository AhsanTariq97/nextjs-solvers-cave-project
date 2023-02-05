import { useState } from "react"
import Button from "./Button"
import PortfolioImage from "./PortfolioImage"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ButtonPortfolio from "./ButtonPortfolio"
import Link from "next/link"

const Portfolio = ({ isPortfolioPg, heading, text }) => {

    const [btnSelected, setBtnSelected] = useState('imgsAll')

    const portfolioImgs = [
        {
            imgsAll: [
                {
                    src: '/Portfolio/All1.webp'
                },
                {
                    src: '/Portfolio/All2.webp'
                },
                {
                    src: '/Portfolio/All3.webp'
                },
                {
                    src: '/Portfolio/All4.webp'
                },
                {
                    src: '/Portfolio/All5.webp'
                },
                {
                    src: '/Portfolio/All6.webp'
                },
                {
                    src: '/Portfolio/All7.webp'
                },
                {
                    src: '/Portfolio/All8.webp'
                },
            ],
            imgsEcommerce: [
                {
                    src: '/Portfolio/Ecommerce1.webp'
                },
            ],
            imgsBusiness: [
                {
                    src: '/Portfolio/Business1.webp'
                },
                {
                    src: '/Portfolio/Business2.webp'
                },
                {
                    src: '/Portfolio/Business3.webp'
                },
                {
                    src: '/Portfolio/Business4.webp'
                },
            ],
            imgsMedical: [
                {
                    src: '/Portfolio/Medical1.webp'
                },
            ],
            imgsMobile: [
                {
                    src: '/Portfolio/Mobile1.webp'
                },
                {
                    src: '/Portfolio/Mobile2.webp'
                },
            ],
            imgsBeverage: [
                {
                    src: '/Portfolio/Beverage1.webp'
                },
            ],
            imgsZeroWaste: [
                {
                    src: '/Portfolio/ZeroWaste1.webp'
                },
            ],
            imgsBooking: [
                {
                    src: '/Portfolio/Booking1.webp'
                },
                {
                    src: '/Portfolio/Booking2.webp'
                },
            ],
            imgsHobby: [
                {
                    src: '/Portfolio/Hobby1.webp'
                },
            ]
        }
    ]

    // const [activeButton, setActiveButton] = useState({})

    // const handleClick = () => {
    //     setActiveButton({
    //         ...activeButton,
    //         [id]: !activeButton[id]
    //     })
    // } 

    return (
        <div className="bg-[#F2F2F2] py-16 w-full">
            <div className="flex flex-col justify-between items-center space-y-4 w-[95%] mx-auto max-w-screen-2xl">
                <h1 className="text-2xl font-semibold text-center py-2 md:font-bold md:text-3xl lg:text-4xl">{heading}</h1>
                <p className="text-xl text-center">{text}</p>
                <div className="flex justify-center items-center flex-wrap space-x-4">
                    <ButtonPortfolio id='imgsAll' text='All' onClick={() => setBtnSelected('imgsAll')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsEcommerce' text='Ecommerce' onClick={() => setBtnSelected('imgsEcommerce')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsBusiness' text='Business' onClick={() => setBtnSelected('imgsBusiness')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsMedical' text='Medical' onClick={() => setBtnSelected('imgsMedical')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsMobile' text='Mobile' onClick={() => setBtnSelected('imgsMobile')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsBeverage' text='Beverage' onClick={() => setBtnSelected('imgsBeverage')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsZeroWaste' text='Zero Waste' onClick={() => setBtnSelected('imgsZeroWaste')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsBooking' text='Booking' onClick={() => setBtnSelected('imgsBooking')} btnSelected={btnSelected} />
                    <ButtonPortfolio id='imgsHobby' text='Hobby' onClick={() => setBtnSelected('imgsHobby')} btnSelected={btnSelected} />
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-8">
                    {portfolioImgs[0][btnSelected].map((imgs, index) => (<PortfolioImage key={index} src={`${imgs.src}`} />))}
                </div>
                {isPortfolioPg ? <></> : <Link href='/portfolio'><Button bgColor='#58ae57' text='Check More' pl='pl-4' icon={faArrowRight} /></Link> }
            </div>
        </div>
    )
}

export default Portfolio