import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import CardContainer from "./CardContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const MainCategory = () => {
  const [category, setCategory] = useState([]);
  const { menuId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5679146&lng=73.91434319999999&collection=${menuId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        )}`
      );
      setCategory(response?.data?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const n = category.length;

  console.log(category.length);

  return (
    <div className="mainCategory">
      <h1></h1>
      <p></p>
      {/* <div id="card-container">
        {category.length === 0 ? (
          <Shimmer />
        ) : (
            ()=>{
                for (let i = 4; i <= n; i++) {
                    
                    
                }
            }
          category.map((restro) => (
            <Link
              key={restro.info.id}
              className="per-food-link"
              to={"/restaurants/" + restro.info.id}
            >
              <CardContainer foodData={restro} />
            </Link>
          ))
        )}
      </div> */}
    </div>
  );
};

export default MainCategory;
