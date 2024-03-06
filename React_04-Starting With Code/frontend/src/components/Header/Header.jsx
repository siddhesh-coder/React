import * as React from "react";
import { COMPANY_LOGO } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SquigglyUnderline } from "../ui/SquigglyUnderline";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/Store/authSlice";

export default Header = () => {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout(false));
  }

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between h-20 items-center text-center p-4 pr-10 shadow-lg bg-white z-30">
      <div>
        <Link to={"/"}>
          <img className="mx-16 w-16 h-16" src={COMPANY_LOGO} loading="lazy"/>
        </Link>
      </div>
      <div className="flex">
      <SquigglyUnderline />
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Login">
          <div className="flex flex-col space-y-1 text-sm">
            <HoveredLink to={'/login'}>Login</HoveredLink>
            <HoveredLink to={'/signup'}>Sign up</HoveredLink>
            <HoveredLink onClick={handleLogout}>Logout</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </div>
    </header>
  );
};
