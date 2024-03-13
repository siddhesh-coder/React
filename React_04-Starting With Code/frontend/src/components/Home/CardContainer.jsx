import { FOOD_IMG } from "../../utils/constants";

const CardContainer = ({ foodData }) => {
  if (!foodData || !foodData.info) {
    return null;
  }

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = foodData.info;
  const { deliveryTime } = sla;

  return (
    <div data-testid="restro-test" className="w-[280px] border-[#ffffff] rounded-3xl p-4 overflow-hidden mr-2 ml-[0.4rem] mt-[2.6rem] transition-transform duration-300 ease-in-out hover:scale-90 cursor-pointer">
      <img
        className="w-full h-[220px] rounded-3xl mb-2 object-cover"
        src={FOOD_IMG + cloudinaryImageId}
        loading="lazy"
        alt={name}
      />

      <div className="flex justify-between">
        <h4>{name}</h4>
        <div className="w-[50px] h-[25px] text-center bg-[#267e3e] rounded-[7px] font-semibold text-white">
          {avgRating} &#x2606;
        </div>
      </div>

      <div className="flex justify-between text-[#696969] font-light text-base whitespace-nowrap max-w-full">
        <p className="w-[180px] overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </p>
        <p>{costForTwo}</p>
      </div>

      <div className="text-[15px]">
        <p>{deliveryTime} min</p>
      </div>
    </div>
  );
};

export default CardContainer;
