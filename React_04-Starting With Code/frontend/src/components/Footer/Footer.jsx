import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-[#02060c] text-white pt-12 pb-12 flex justify-center items-center">
      <div className="w-90 max-w-1200 h-auto flex flex-wrap justify-between">
        <div>
          <h1>HungryHub</h1>
          <p>© 2024 Siddhesh Bhosale</p>
        </div>

        <div>
          <h3>Company</h3>
          <ul className="list-none p-0">
            <li className="my-[10px]">About</li>
            <li className="my-[10px]">Careers</li>
            <li className="my-[10px]">Team</li>
          </ul>
        </div>

        <div>
          <div>
            <h3>Contact us</h3>
            <span>Help & Support</span>
          </div>

          <div className="w-full mt-8">
            <h3>Legal</h3>
            <ul className="list-none p-0">
              <li className="my-[10px]">Terms & Conditions</li>
              <li className="my-[10px]">Cookie Policy</li>
              <li className="my-[10px]">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div>
          <h3>We deliver to:</h3>
          <ul className="list-none p-0">
            <li className="my-[10px]">Bangalore</li>
            <li className="my-[10px]">Gurgaon</li>
            <li className="my-[10px]">Hyderabad</li>
            <li className="my-[10px]">Delhi</li>
            <li className="my-[10px]">Mumbai</li>
            <li className="my-[10px]">Pune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
