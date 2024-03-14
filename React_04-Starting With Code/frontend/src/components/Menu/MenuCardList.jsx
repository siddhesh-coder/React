import React, { useEffect, useState } from "react";
import { VEG_LOGO, NONVEG_LOGO, FOOD_MENU } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/Store/cartSlice";
import useNotify from "../../hooks/useNotify";

const MenuCardList = (el) => {
  const [updatePrice, setUpdatePrice] = useState();
  const dispatch = useDispatch();
  const notify = useNotify();

  const {
    itemAttribute: { vegClassifier },
    name,
    price,
    finalPrice,
    description,
    imageId,
    offerTags,
    id,
    defaultPrice,
  } = el?.el?.card?.info;

  let flag = true;

  if (!offerTags) {
    flag = false;
  }

  const { title, subTitle, textColor, backgroundColor } = offerTags?.[0] || {};

  const p1 = price || 0;
  const p2 = finalPrice || 0;

  const calculatedPrice = parseFloat((p1 / 100).toFixed(2));
  const calculatedFinalPrice = parseFloat((p2 / 100).toFixed(2));

  useEffect(() => {
    if (calculatedPrice === 0.0) {
      setUpdatePrice(defaultPrice / 100);
    } else {
      setUpdatePrice(calculatedPrice);
    }
  }, [calculatedPrice]);

  const handleAddItem = () => {
    dispatch(
      addItem({
        id: id,
        name: name,
        img: imageId,
        price: updatePrice,
      })
    );
    notify({ message: `${name} added to cart` });
  };

  return (
    <div
      data-testid="menu-list"
      className="flex justify-between items-center mt-5 border-b-2 border-solid border-[#b5b5b5] pb-5"
    >
      <div className="w-4/5">
        <div>
          {vegClassifier === "VEG" ? (
            <img className="w-[15px]" src={VEG_LOGO} alt="veg" loading="lazy" />
          ) : (
            <img
              className="w-[17px]"
              src={NONVEG_LOGO}
              alt="nonveg"
              loading="lazy"
            />
          )}
        </div>
        <div className="flex justify-between">
          <div className="text-lg text-[#3e4152] font-medium">{name}</div>
          <button
            data-testid="add-test"
            className="w-20 h-9 bg-transparent rounded-xl border-none text-sm text-[#60b246] font-semibold"
            onClick={handleAddItem}
          >
            ADD +
          </button>
        </div>
        <div>
          {calculatedFinalPrice === 0.0 ? (
            <>
              <span>₹{updatePrice}</span>
              {flag && (
                <span
                  style={{ color: textColor, backgroundColor: backgroundColor }}
                >
                  {title} | {subTitle}
                </span>
              )}
            </>
          ) : (
            <>
              <span className="line-through text-xs text-[#7e808c] font-light mr-[10px]">
                ₹{updatePrice}
              </span>
              <span className="text-sm font-normal text-[#3e4152]">
                ₹{calculatedFinalPrice}
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-[#282c3f] opacity-45 font-light">
          {description}
        </p>
      </div>
      <div>
        {imageId && (
          <img
            className="rounded-2xl w-[135px] h-[100px]"
            src={FOOD_MENU + imageId}
            alt="foodimg"
          />
        )}
      </div>
    </div>
  );
};

export default MenuCardList;
