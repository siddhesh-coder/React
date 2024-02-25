import React from "react";
import "./ProductCard.css";
import useCategoryImage from "../../hooks/useCategoryImage";

const ProductCard = ({ items }) => {
  const categoryImage = useCategoryImage(items.variations[0].images[0]);

  const { brand, product_name_without_brand } = items;

  const { price, sku_quantity_with_combo } = items?.variations[0];

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img className="product-imgg" src={categoryImage} alt="" loading="lazy"/>
      </div>
      <div className="product-brand">{brand}</div>
      <div className="product-name">{product_name_without_brand}</div>
      <div className="product-quantity">{sku_quantity_with_combo}</div>

      <div className="product-price-add">
        <div>
          <div className="product-mrp">₹{price.mrp}</div>
          <div className="product-price">₹{price.offer_price}</div>
        </div>
        <div>
          <button className="add-grocery">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
