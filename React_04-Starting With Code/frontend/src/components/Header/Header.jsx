import React from "react";
import companyLogo from "../../assets/company.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SquigglyUnderline } from "../ui/SquigglyUnderline";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/Store/authSlice";
import useNotify from "../../hooks/useNotify";

export default Header = () => {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  const notify = useNotify();

  const handleLogout = () => {
    dispatch(logout(false));
    notify({ message: "Logout Successfully" });
  };

  return (
    <header className="fixed top-0 left-0 z-30 flex items-center justify-between w-full h-20 p-4 pr-10 text-center bg-white shadow-lg">
      <div>
        <Link to={"/"}>
          <img className="w-32 h-10 mx-16" src={companyLogo} loading="lazy" alt="company_logo"/>
        </Link>
      </div>
      <div className="flex">
        <SquigglyUnderline />
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Login">
            <div className="flex flex-col space-y-1 text-sm">
              <HoveredLink to={"/login"}>Login</HoveredLink>
              <HoveredLink to={"/signup"}>Sign up</HoveredLink>
              <HoveredLink data-testid="logout" onClick={handleLogout}>Logout</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};
