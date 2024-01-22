import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Home, Building2, Info, UserRound } from "lucide-react";
import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default Header = () => {
  const [userState, setUserState] = useState("Login");

  function handleUserState() {
    if (userState === "Logout") {
      setUserState("Login");
    } else {
      setUserState("Logout");
    }
  }

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
              <Building2 />
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
            <button className="user-main-btn" onClick={handleUserState}>
              <Link to={userState === "Login" ? "/signup" : null}>
                <UserRound />
                {userState}
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
