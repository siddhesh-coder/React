import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import FoodCards from "./components/FoodCards";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FoodCart from "./components/FoodCart";
import Errors from "./components/Errors";


const AppParent = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
      {/* Footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppParent />,
    children: [
      {
        path: "/",
        element: <FoodCards />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/foodcart",
        element: <FoodCart />,
      },
    ],
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
