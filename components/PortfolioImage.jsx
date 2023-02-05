import Image from "next/image"

const PortfolioImage = ({ src }) => {
  return (
    <div className="w-[315px] overflow-hidden relative py-[240px]">
        <Image src={src} width={378} height={650} alt='portfolio' className='absolute top-0 left-0 hover:-top-[75px] ease-linear duration-500' />
    </div>
  )
}

export default PortfolioImage