import React from "react";

export const Footer = () => {
  return (
    <div className="footer-mainContainer">
      <div className="footer-innerContainer">
        <div>
          <h1>HungryHub</h1>
          <p>© 2024 Siddhesh Bhosale</p>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>

        <div>
          <div>
            <h3>Contact us</h3>
            <span>Help & Support</span>
          </div>

          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div>
          <h3>We deliver to:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
