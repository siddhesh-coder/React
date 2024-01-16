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
            <a href="/">
              <Home />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <PercentCircle />
              <span>Offers</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <Info />
              <span>Help</span>
            </a>
          </li>
          <li>
            <a href="/shopping">
              <ShoppingBag />
              <span>Cart</span>
            </a>
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
