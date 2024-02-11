import React from 'react';
import mainLogo from '../../assets/foodload.gif';

export const FoodLoader = () => {
  return (
    <img className='foodloader' src={mainLogo} alt="Loading..." />
  )
}

export default FoodLoader;
