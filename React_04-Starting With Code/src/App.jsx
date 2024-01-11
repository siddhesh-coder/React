import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import FoodCards from "./components/FoodCards"; 

const AppParent = () => {
  return (
    <div id="app">
      <Header />
      <FoodCards />

      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppParent />);
