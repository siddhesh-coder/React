import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import FoodCards from "./components/Home/FoodCards";
import AboutUs from "./components/Header/AboutUs";
import ContactUs from "./components/Header/ContactUs";
import FoodCart from "./components/Home/FoodCart";
import Errors from "./components/Error/Errors";
import MainCategory from "./components/Home/MainCategory";
import useOnlineStatus from "./hooks/useOnlineStatus";
import InternetConnectionMessage from "./components/InternetConnectionMessage/InternetConnectionMessage";
import Shimmer from "./components/Shimmers/Shimmer";
import FoodLoader from "./components/Home/FoodLoader";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import { GlobalContextProvider } from "./Context/GlobalContext";

// const GroceryLanding = lazy(() => import("./Grocery/components/GroceryLanding"));
const RestaurantMenu = lazy(() => import("./components/Menu/RestaurantMenu"));

const AppParent = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <GlobalContextProvider>
    <div className="w-full flex justify-between items-center flex-col">
      {onlineStatus ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <InternetConnectionMessage />
      )}
    </div>
    </GlobalContextProvider>
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
      // {
      //   path: "grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading...</h1>}>
      //       <GroceryLanding />
      //     </Suspense>
      //   ),
      // },
      {
        path: "restaurants/:resId",
        element: <Suspense fallback={<FoodLoader/>}>
          <RestaurantMenu/>
        </Suspense>,
      },
      {
        path: "signup",
        element: <SignUp/>,
      },
      {
        path: "category/:menuId",
        element: <MainCategory />,
      },
      {
        path: 'login',
        element: <Login/>
      }
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
