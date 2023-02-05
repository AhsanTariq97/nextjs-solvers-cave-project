import { FaRegStar, FaWordpressSimple, FaShieldAlt, FaRegHandshake } from 'react-icons/fa';
import NumbersGrow from './NumbersGrow';

const ClientsFeedback = () => {
  return (
    <div className='bg-white flex flex-col justify-between items-center px-4 py-16 space-y-8'>
        <h1 className='text-xl font-semibold text-center md:font-bold md:text-2xl lg:text-4xl'>What Our Valuable Clients Say</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 custom-shadow rounded-2xl w-[90%] mx-auto max-w-screen-xl'>
          <div className='flex flex-col justify-between items-center space-y-4 py-8 px-2 border-b lg:border-b-0 border-r'>
            <FaRegStar size={32} color={'#58ae57'} />
            <h1 className='flex text-2xl md:text-3xl font-bold'><NumbersGrow increments={5} targetValue={700} />+</h1>
            <p className='h-[40px] text-base text-center md:text-base lg:h-[50px]'>5-star reviews</p>
          </div>
          <div className='flex flex-col justify-between items-center space-y-4 py-8 px-2 border-b lg:border-b-0 border-l lg:border-r'>
            <FaWordpressSimple size={32} color={'#58ae57'} />
            <h1 className='flex text-2xl md:text-3xl font-bold'><NumbersGrow increments={1} targetValue={40} />+</h1>
            <p className='h-[40px] text-base text-center md:text-base lg:h-[50px]'>reliable WordPress experts</p>
          </div>
          <div className='flex flex-col justify-between items-center space-y-4 py-8 px-2 border-t lg:border-t-0 border-r lg:border-l'>
            <FaShieldAlt size={32} color={'#58ae57'} />
            <h1  className='flex text-2xl md:text-3xl font-bold'><NumbersGrow increments={1} targetValue={100} />%</h1>
            <p className='h-[40px] text-base text-center md:text-base lg:h-[50px]'>Unlimited Revisions</p>
          </div>
          <div className='flex flex-col justify-between items-center space-y-4 py-8 px-2 border-t lg:border-t-0 border-l'>
            <FaRegHandshake size={32} color={'#58ae57'} />
            <h1  className='flex text-2xl md:text-3xl font-bold'><NumbersGrow increments={1} targetValue={6} />+</h1>
            <p className='h-[40px] text-base text-center md:text-base lg:h-[50px]'>years serving WordPress clients</p>
          </div>
        </div>
    </div>
  )
}

export default ClientsFeedback