import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import FoodCards from "./components/Home/FoodCards";
import AboutUs from "./components/Header/AboutUs";
import ContactUs from "./components/Header/ContactUs";
import FoodCart from "./components/Home/FoodCart";
import Errors from "./components/Error/Errors";
import RestaurantMenu from "./components/Menu/RestaurantMenu";
import SignupForm from "./components/Header/SignUpForm";
import MainCategory from "./components/Home/MainCategory";

const AppParent = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppParent />,
    children: [
      {
        path: "",
        element: <FoodCards />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "foodcart",
        element: <FoodCart />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "signup",
        element: <SignupForm />,
      },
      {
        path: "category/:menuId",
        element: <MainCategory />,
      },
    ],
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
