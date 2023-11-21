import React from 'react'
import Button from '../components/Button';
import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className= "flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} alt="shoe promotion" width={773} height={687} className="object-contain w-full" />
    </div>
    <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Special </span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark the shopping journey that redefines your experiance 
          with unbeatable deals. From premier selections to incredible 
          savings we offer unoarallel value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className='mt-11' flex flex-wrap gap-4>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button label='learn more' backgroundColor="bg-white" borderColor="border-slate-grey" textColor="text-slate-gray" />

        </div>
      </div>

    </section>
  )
}

export default SpecialOffer

