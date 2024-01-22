import React from "react";
import { VEG_LOGO, NONVEG_LOGO, FOOD_MENU } from "../utils/constants";

const MenuCardList = (el) => {
  const {
    itemAttribute: { vegClassifier },
    name,
    price,
    finalPrice,
    description,
    imageId,
    offerTags,
  } = el?.el?.card?.info;

  let flag = true;

  if (!offerTags || offerTags.length === 0) {
    flag = false;
  }

  const { title, subTitle, textColor, backgroundColor } = offerTags?.[0] || {};

  const p1 = price || 0;
  const p2 = finalPrice || 0;

  const calculatedPrice = (p1 / 100).toFixed(2);
  const calculatedFinalPrice = (p2 / 100).toFixed(2);

  return (
    <div className="food-list">
      <div className="food-list-info">
        <div>
          {vegClassifier === "VEG" ? (
            <img className="veg-logo" src={VEG_LOGO} alt="veg" />
          ) : (
            <img className="nonveg-logo" src={NONVEG_LOGO} alt="nonveg" />
          )}
        </div>
        <div className="list-title-button">
          <div className="food-title">{name}</div>
          <button className="add-btn">ADD +</button>
        </div>
        <div>
          {calculatedFinalPrice === "0.00" ? (
            <>
              <span>{"₹" + String(calculatedPrice)} </span>
              {flag && (
                <span
                  style={{
                    color: `${textColor}`,
                    backgroundColor: `${backgroundColor}`,
                  }}
                >
                  {title} | {subTitle}
                </span>
              )}
            </>
          ) : (
            <>
              <span className="origi-price">
                {"₹" + String(calculatedPrice)}
              </span>
              <span className="final-Price">
                {"₹" + String(calculatedFinalPrice)}
              </span>
            </>
          )}
        </div>
        <p className="list-food-dis">{description}</p>
      </div>
      <div>
        {imageId && (
          <img
            className="list-img-block"
            src={FOOD_MENU + imageId}
            alt="foodimg"
          />
        )}
      </div>
    </div>
  );
};

export default MenuCardList;
