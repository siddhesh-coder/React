import { useEffect, useState } from "react";
import axios from "axios";

const useCategory = (menuId) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5679146&lng=73.91434319999999&collection=${menuId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)}`
      );
      setCategory(response?.data?.data?.cards || []);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return category;
};

export default useCategory;
