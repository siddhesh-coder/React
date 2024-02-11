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
    <div className="mainCategory">
      <h1 className="title-mainCategory">{title}</h1>
      <p className="description-mainCategory">{description}</p>
      <h1 className="restro-mainCategory">{text}</h1>
      <div id="card-container">
        {category.length === 0 ? (
          <Shimmer />
        ) : (
          category.slice(4).map((restro) => {
            const { id } = restro?.card?.card?.info || "";
            const restros = restro?.card?.card;
            return (
              <Link
                key={id}
                className="per-food-link"
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
