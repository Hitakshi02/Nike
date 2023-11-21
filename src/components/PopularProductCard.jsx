import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt='Shoe Card' className='w-[282px] h-[282px]'/>
      <div className='flex justify-start gap-2.5 mt-8'>
        <img src={star} alt='Rating Star'width={24} height={24}/>
        <p className=' font-montserrat text-xl leading-normal text-slate-gray'>
            ({rating})
        </p>
      </div>
      <h3 className='font-palanquin font-semibold text-2xl leading-normal mt-2'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard