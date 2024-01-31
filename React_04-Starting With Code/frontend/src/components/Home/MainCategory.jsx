import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmers/Shimmer";
import CardContainer from "./CardContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const MainCategory = () => {
  const [category, setCategory] = useState([]);
  const { menuId } = useParams();

  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5679146&lng=73.91434319999999&collection=${menuId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      setCategory(response?.data?.data?.cards || []);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const { title, description } = category[0]?.card?.card || {};
  const { text } = category[2]?.card?.card?.gridElements?.infoWithStyle || {};

  return (
   
      <div className="mainCategory">
        <h1 className="title-mainCategory">{title}</h1>
        <p className="description-mainCategory">{description}</p>
        <h1 className="restro-mainCategory">{text}</h1>
        <div id="card-container">
          {category.length === 0 ? (
            <Shimmer />
          ) : (
            category.slice(4).map((restro) => {
              const { id } = restro?.card?.card?.info || '';
              const restros = restro?.card?.card;
              return (
                <Link
                  key={id}
                  className="per-food-link"
                  to={"/restaurants/" + id}
                >
                  <CardContainer foodData={restros} />
                </Link>
              );
            })
          )}
        </div>
      </div>
   
  );
};

export default MainCategory;
