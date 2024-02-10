/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const user = useLoaderData();
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetchData();
  //   return () => fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.github.com/users/siddhesh-coder"
  //     );
  //     const data = await response.json();
  //     setUser(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  //We well fetch data by Loader
  

  const { name, avatar_url, bio, url } = user;

  console.log(name);

  return (
    <div className="flex justify-between items-center">
        <img className="w-100 h-100" src={avatar_url} alt="Profile" />
        <div className="text-left">
            <p className="text-2xl">Name: {name}</p>
            <p className="text-2xl">Bio: {bio}</p>
            <p className="text-2xl">URL: {url}</p>
        </div>
    </div>
  );
};

export default Github;
