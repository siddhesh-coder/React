import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Info,
  ShoppingBag,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
// import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
// import { cn } from "../../utils/cn";

const navigation = [
  { name: "Home", link: "/", icon: <Home /> },
  { name: "About", link: "aboutus", icon: <Building2 /> },
  { name: "Help", link: "contactus", icon: <Info /> },
  { name: "Bag", link: "foodcart", icon: <ShoppingBag /> },
  { name: "Grocery", link: "grocery", icon: <ShoppingBasket /> },
  // { name: "Login", link: "signup", icon: <UserRound /> },
];

export const SquigglyUnderline = () => {
  // const [active, setActive] = useState(null);
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="flex gap-16 mr-12 items-center">
      {navigation.map((item) => {
        const isSelected = item.name === selectedLink;
        return (
          <Link
            key={item.name}
            to={item.link}
            className={`relative flex text-sm leading-6 no-underline ${
              isSelected ? "font-semibold text-yellow-400" : "text-gray-700"
            }`}
            onClick={() => setSelectedLink(item.name)}
          >
            <div className="mr-1 mb-1">{item.icon}</div>
            {item.name}
            {isSelected ? (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#7043EC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </motion.div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};
