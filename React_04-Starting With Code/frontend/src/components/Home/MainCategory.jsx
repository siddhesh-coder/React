import Shimmer from "../Shimmers/Shimmer";
import CardContainer from "./CardContainer";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import { useParams } from "react-router-dom";

export const MainCategory = () => {
  const { menuId } = useParams();

  const category = useCategory(menuId);

  const { title, description } = category[0]?.card?.card || {};
  const { text } = category[2]?.card?.card?.gridElements?.infoWithStyle || {};

  return (
    <div className="w-[1200px] relative top-[150px]">
      <h1 className="font-semibold text-[40px] leading-[48px] text-[#282c3f]">{title}</h1>
      <p className="font-light text-[18px] leading-[22px] text-[#282c3f]">{description}</p>
      <h1 className="mt-5 font-extrabold text-2xl text-[#02060c] text-opacity-95">{text}</h1>
      <div className="flex flex-wrap">
        {category.length === 0 ? (
          <Shimmer />
        ) : (
          category.slice(4).map((restro) => {
            const { id } = restro?.card?.card?.info || "";
            const restros = restro?.card?.card;
            return (
              <Link
                key={id}
                className="no-underline text-[#02060c] text-opacity-75"
                to={"/restaurants/" + id}
              >
                <CardContainer foodData={restros} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MainCategory;
