import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    
    const getReferenceNo = searchQuery.get('reference');
  return (
    <div className='w-96 h-[100vh] flex flex-col justify-center items-center'>
        <img className='w-72' src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" alt="payment success" />
        <div className='mb-8'><h2 className='text-base font-extrabold text-gray-800'>Reference No: {getReferenceNo}</h2></div>
        <Link to={'/'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to Home</Link>
    </div>
  )
}

export default PaymentSuccess;