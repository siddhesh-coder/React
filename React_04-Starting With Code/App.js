import React from "react";
import ReactDOM from "react-dom/client";

import { ShoppingBag, Search, Home, PercentCircle, Info } from "lucide-react";

import resList from "./mockData";


//Header Component

const Header = () => {
  return (
    <header>
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/pizzeria-emblem-design_1176-233.jpg?w=740&t=st=1704703727~exp=1704704327~hmac=73459d409ba24e137deedf33556d18ac149cc7557d20117411ffa0ee9d79734a"
        />
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="/">
              <Home />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <PercentCircle />
              <span>Offers</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <Info />
              <span>Help</span>
            </a>
          </li>
          <li>
            <a href="/shopping">
              <ShoppingBag />
              <span>Cart</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const CardContainer = ({ foodData }) => {
  if (!foodData || !foodData.info) {
    return null; // or a placeholder for loading or error state
  }

  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = foodData?.info; //Optional Chaining
  const {deliveryTime} = sla;

  // above we will use destructing for props
  
  return (
    <>
      <div className="card">
        <img
          className="food-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            cloudinaryImageId
          }
        />

        <div className="food-heading">
          <h4>{name}</h4>
          <div className="rating">{avgRating} &#x2606;</div>
        </div>

        <div className="food-dis">
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
        </div>

        <div className="food-time">
          <p>{deliveryTime} min</p>
        </div>
      </div>
    </>
  );
};

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for restaurants and food "
      />
      <button className="search-button">
        <Search />
      </button>
    </div>
  );
};

const FoodCards = () => {

  //!Note: never take index's as a key react says it.
  const cardComponents = resList.map((restro) => (
    <CardContainer key={restro.info.id}  foodData={restro}/>
  ));

  return (
    <main>
      <SearchBar />
      <div id="card-container">
        {cardComponents}
      </div>
    </main>
  );
};

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
