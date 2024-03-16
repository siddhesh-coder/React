import React from 'react'
import { FOOD_IMG } from "../../utils/constants";

export const ResultsBar = ({result, id}) => {

    const {
        name,
        cloudinaryImageId,
        cuisines
    } = result?.info;
  return (
    <div className='flex hover:bg-[#efefef]'>
        <div>
        <img
        className='w-[60px] m-3'
            src={
              FOOD_IMG + cloudinaryImageId
            }
            loading="lazy"
          />
        </div>
        <div className='mt-[5px] cursor-pointer'>
            <div className='font-semibold'>{name}</div>
            <div className='text-[#696969]'>{cuisines.join(' ')}</div>
        </div>
    </div>
  )
}
