import { FOOD_IMG } from "../utils/constants";

export default CardContainer = ({ foodData }) => {
    if (!foodData || !foodData.info) {
      return null; // or a placeholder for loading or error state
    }
  
    const { id, cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
      foodData?.info; //Optional Chaining
    const { deliveryTime } = sla;
  
    // above we will use destructing for props
  
    return (
        <div className="card">
          <img
            className="food-img"
            src={
              FOOD_IMG + cloudinaryImageId
            }
          />
  
          <div className="food-heading">
            <h4>{name}</h4>
            <div className="rating">{avgRating} &#x2606;</div>
          </div>
  
          <div className="food-dis">
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
          </div>
  
          <div className="food-time">
            <p>{deliveryTime} min</p>
          </div>
        </div>
    );
  };