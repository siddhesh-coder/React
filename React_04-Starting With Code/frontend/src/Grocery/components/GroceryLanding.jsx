import React, { useState, useEffect } from "react";
import "./GroceryLanding.css";
import GroceryCategory from "./GroceryCategory";
import useGroceryData from "../../hooks/useGroceryData";
import { GROCERY_API_CATEGORY } from "../../utils/constants";
import ProductCarousel from "./ProductCarousel";
import Footer from "../../components/Footer/Footer";

const GroceryLanding = () => {
  const categoryData = useGroceryData(GROCERY_API_CATEGORY);

  const [widgetData, setWidgetData] = useState({
    dataShopBy: null,
    exclusive: null,
    container: null,
    container2: null,
    container3: null,
  });

  useEffect(() => {
    if (categoryData && categoryData.data && categoryData.data.widgets) {
      const [dataShopBy, , exclusive, container, container2, container3] =
        categoryData?.data?.widgets;

      setWidgetData({
        dataShopBy,
        exclusive,
        container,
        container2,
        container3,
      });
    }
  }, [categoryData]);

  const { dataShopBy, exclusive, container, container2, container3 } =
    widgetData;

  return (
    <>
    <div className="grocery">
      {dataShopBy && <GroceryCategory categories={dataShopBy} />}
      {exclusive && <ProductCarousel products={exclusive} />}
      {container && <ProductCarousel products={container} />}
      {container2 && <ProductCarousel products={container2} />}
      {container3 && <ProductCarousel products={container3} />}
    </div>
     {/* <Footer/> */}
    </>
  );
};

export default GroceryLanding;
