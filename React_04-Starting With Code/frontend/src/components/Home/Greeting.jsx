import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default Greeting = () => {
  const [userName, setUserName] = useState("");
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserName(JSON.parse(userInfo)?.name);
  }, [userName]);

  return (
    <div className="mb-5 text-xl font-extrabold text-blue-gray-900">
      {isAuthenticated ? userName : "Hello"}, what's on your mind?
    </div>
  );
};
