import * as React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Home,
  PercentCircle,
  Info,
  CircleUserRound,
} from "lucide-react";
import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";

export default Header = () => {
  const [userState, setUserState] = useState("Login");

  return (
    <header>
      <div>
        <img className="logo" src={COMPANY_LOGO} />
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to={"/"}>
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/aboutus"}>
              <PercentCircle />
              <span>About us</span>
            </Link>
          </li>
          <li>
            <Link to={"/contactus"}>
              <Info />
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link to={"/foodcart"}>
              <ShoppingBag />
              <span>Cart</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                userState === "Logout"
                  ? setUserState("Login")
                  : setUserState("Logout")
              }
            >
              {userState}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
