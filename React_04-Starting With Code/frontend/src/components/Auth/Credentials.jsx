import React, { useState, useEffect } from 'react';

const Credentials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fixed inset-y-0 top-0 right-0 px-6 pt-6 transition-transform duration-500 ease-in-out transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="max-w-xl p-6 mx-auto bg-white shadow-lg rounded-xl">
        <p className="text-sm font-extrabold leading-6 text-gray-900">
          Use this test Credentials:
        </p>
        <p className="text-sm leading-6 text-gray-900">Name: Test1</p>
        <p className="text-sm leading-6 text-gray-900">
          Email: Test1@gmail.com
        </p>
        <p className="text-sm leading-6 text-gray-900">
          password: Test1@tryout
        </p>
      </div>
    </div>
  );
}

export default Credentials;
