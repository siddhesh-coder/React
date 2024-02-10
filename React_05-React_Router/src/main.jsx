import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Github from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";
import FetchingUserData from "./components/FetchingUserData/FetchingUserData.jsx";

// 1 Pattern
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <AboutUs/>
//       },
//       {
//         path: 'contact',
//         element: <ContactUs/>
//       },
//       {
//         path: 'github',
//         element: <Github/>
//       }
//     ]
//   }
// ])

//2 Pattern [looks easy]
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route
       loader={FetchingUserData}
       path="github"
       element={<Github />} />
      <Route path="user/:userId" element={<User />} /> 
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
