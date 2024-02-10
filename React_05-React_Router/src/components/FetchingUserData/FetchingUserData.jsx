// eslint-disable-next-line no-unused-vars
import React from 'react';

const FetchingUserData = async() => {
   const response = await fetch("https://api.github.com/users/siddhesh-coder");
   return response.json();
}

export default FetchingUserData;