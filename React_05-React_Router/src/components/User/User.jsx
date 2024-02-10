// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <div className="bg-gray-800 text-white py-4 px-6">User: {userId}</div>;

};

export default User;
