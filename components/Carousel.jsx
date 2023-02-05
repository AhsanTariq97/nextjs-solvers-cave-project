import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class SwipeToSlide extends Component {
  render() {


    const logos = [
        {
            src: '/01.webp'
        },
        {
            src: '/02.webp'
        },
        {
            src: '/04.webp'
        },
        {
            src: '/07.webp'
        },
        {
            src: '/08.webp'
        },
        {
            src: '/09.webp'
        },
        {
            src: '/cc01.webp'
        },
        {
            src: '/cc02.webp'
        }
    ]

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
    //   {width < 700 ? slidesToShow: 4 : slidesToShow: 6 }
      slidesToShow: 6,
      swipeToSlide: true,
      autoplay: true,
      speed: 1250,
      autoplaySpeed: 1250,
    //   afterChange: function(index) {
    //     console.log(
    //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //     );
    //   }
    };
    return (
      <div>
        <Slider {...settings}>
            <div>
                <Image src='/01.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/02.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/04.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/07.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/08.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/09.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/cc01.webp' width={190} height={50} alt='Logo' />
            </div>
            <div>
                <Image src='/cc02.webp' width={190} height={50} alt='Logo' />
            </div>
        </Slider>
      </div>
    );
  }
}

// import Image from "next/image"

// const Carousel = () => {
//     const logos = [
//         {
//             src: '/01.webp'
//         },
//         {
//             src: '/02.webp'
//         },
//         {
//             src: '/04.webp'
//         },
//         {
//             src: '/07.webp'
//         },
//         {
//             src: '/08.webp'
//         },
//         {
//             src: '/09.webp'
//         },
//         {
//             src: '/cc01.webp'
//         },
//         {
//             src: '/cc02.webp'
//         }
//     ]

//     return (
//         <div className='flex justify-evenly items-center border-t-2 border-white py-4 bg-black/30'>
//             {logos.map(logo => (<Image src={`${logo.src}`} width={190} height={50} alt='Logo' />))}
//         </div>
//     )
// }

// export default Carousel