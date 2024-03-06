import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5679146&lng=73.91434319999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        )}`
      );
      setMenuInfo(response?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return menuInfo;
};

export default useRestaurantMenu;
