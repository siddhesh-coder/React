import { Search } from "lucide-react";
import JavaScriptLogo from "./img/JavaScript-logo.webp";
import BohemianMan from "./img/bohemian-man-with-his-arms-crossed.webp";

export const Logo = () =>{
    return (
      <div >
        <img className="logo" src={JavaScriptLogo} alt="JavaScript Logo" />
      </div>
    );
}

export const SearchBar = () => {
    return (
     <div className="search">
        <input className="input" placeholder="Search items..."/>
        <button><Search /></button>
     </div>
    );
}

export const User = () =>{
    return (
      <div >
       <img className="user" src={BohemianMan} alt="Bohemian Man" />
      </div>
    );
}