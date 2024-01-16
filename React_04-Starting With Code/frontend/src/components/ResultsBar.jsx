import React from 'react'
import { FOOD_IMG } from "../utils/constants";

export const ResultsBar = ({results, id}) => {

    const {
        name,
        cloudinaryImageId,
        cuisines
    } = results?.info;
  return (
    <div className='result-bar'>
        <div>
        <img
        className='result-img'
            src={
              FOOD_IMG + cloudinaryImageId
            }
          />
        </div>
        <div className='result-info' onClick={(e) => alert(`You choose ${results.info.name}`)}>
            <div className='result-info-name'>{name}</div>
            <div className='result-info-cuisine'>{cuisines.join(' ')}</div>
        </div>
    </div>
  )
}
