import React, { useEffect, useState } from "react";
import "./GroceryCategory.css";
import Item from "./Item";

const GroceryCategory = ({ categories }) => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTitle(categories?.widgetInfo?.title || "");
    setItems(categories?.data || []);
}, [categories]);

  return (
    <div className="category-wrapper">
      <h3>{title}</h3>
      <div className="category-grid">
        {items.length === 0 ? <h4>Loading...</h4> : 
          items.map((product)=> <Item key={product?.nodeId} product={product}/>)}
      </div>
    </div>
  );
};

export default GroceryCategory;
