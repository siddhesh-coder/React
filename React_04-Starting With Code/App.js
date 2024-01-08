import React from "react";
import ReactDOM from "react-dom/client";

import { ShoppingBag } from "lucide-react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="profile">
            <ShoppingBag />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const CardContainer = ({foodData}) => {
  // above we will use destructing for props
  return (
    <>
      {foodData.map((foodInfo) => {
        const imageKey = foodInfo.info.cloudinaryImageId;
        return (
          <div className="card" key={foodInfo.info.id}>
            <img
              className="food-img"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+imageKey}
            />

            <div className="food-heading">
              <h4>{foodInfo.info.name}</h4>
              <div className="rating">{foodInfo.info.avgRating} &#x2606;</div>
            </div>

            <div className="food-dis">
              <p>{foodInfo.info.cuisines.join(', ')}</p>
              <p>{foodInfo.info.costForTwo}</p>
            </div>

            <div className="food-time">
              <p>{foodInfo.info.sla.deliveryTime} min</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

// const Search = ()=> {

// }

const FoodCards = () => {
  return (
    <main>
      <div>Search</div>
      <div id="card-container">
        <CardContainer foodData={resList} />
      </div>
    </main>
  );
};
const AppParent = () => {
  return (
    <div id="app">
      {/* //Header */}
      <Header />
      {/* //Body */}
      <FoodCards />
      {/* //Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppParent />);
