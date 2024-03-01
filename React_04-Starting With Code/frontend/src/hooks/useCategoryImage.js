import { useState, useEffect } from "react";
import axios from "axios";

const useCategoryImage = (imageId) => {
    const [categoryImage, setCategoryImage] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/${imageId}`,
            { responseType: "arraybuffer" } // Ensure response is treated as binary data
          );
          const imageData = Buffer.from(response.data, "binary").toString("base64"); // Convert binary data to base64 string
          setCategoryImage(`data:${response.headers["content-type"]};base64,${imageData}`); // Set base64 image data
        } catch (error) {
          console.error("Error fetching category image:", error);
        }
      };
  
      fetchData();
      
    }, [imageId]);

  return categoryImage;
};

export default useCategoryImage;
