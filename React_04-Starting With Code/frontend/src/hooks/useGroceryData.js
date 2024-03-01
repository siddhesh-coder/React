import { useEffect, useState } from "react";
import axios from "axios";

const useGroceryData = (urlApi) => {
  const [groceryData, setGroceryData] = useState(null);

  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, [urlApi]);

  const fetchData = async () => {
    try {
      const response = await axios.get(urlApi);
      setGroceryData(response.data);
    } catch (error) {
      console.error("Error fetching grocery data:", error);
    }
  };

  return groceryData;
};

export default useGroceryData;
