import React from 'react';
import mainLogo from '../../assets/foodload.gif';

export const FoodLoader = () => {
  return (
    <img className='relative top-[200px] w-[300px] h-[250px]' src={mainLogo} alt="Loading..." loading="lazy"/>
  )
}

export default FoodLoader;
