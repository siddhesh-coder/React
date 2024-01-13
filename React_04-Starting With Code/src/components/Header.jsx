import { ShoppingBag, Home, PercentCircle, Info, CircleUserRound } from "lucide-react";
import { COMPANY_LOGO } from "../utils/constants";
import { useAuth0 } from "@auth0/auth0-react";

export default Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
            {isAuthenticated ? (
              <div className="logUser">
              <CircleUserRound />
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                } >
                Log Out
              </button>
              </div>
            ) : (
              <div className="logUser">
              <CircleUserRound />
              <button onClick={() => loginWithRedirect() }>Log In</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
