import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import FoodCards from "./components/FoodCards"; 

import { Auth0Provider } from '@auth0/auth0-react';

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
root.render(<Auth0Provider
  domain="dev-uw1bj5ottes8arj0.us.auth0.com"
  clientId="rzZ2zkkPZ4UJqG9yODkrDUpbdKrE0qcD"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <AppParent />
</Auth0Provider>,);
