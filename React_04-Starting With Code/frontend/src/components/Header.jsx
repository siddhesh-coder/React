import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Home, Building2, Info, UserRound } from "lucide-react";
import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
        <Link to={"/"}>
        <img className="logo" src={COMPANY_LOGO} />
        </Link>
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>
              <Home />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/aboutus"}>
              <Building2 />
              <span>About us</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contactus"}>
              <Info />
              <span>Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/foodcart"}>
              <ShoppingBag />
              <span>Cart</span>
            </NavLink>
          </li>
          <li>
            <button className="user-main-btn" onClick={handleUserState}>
              <NavLink to={userState === "Login" ? "/signup" : null}>
                <UserRound />
                {userState}
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
