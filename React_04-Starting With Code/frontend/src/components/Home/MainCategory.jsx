import useCategory from "../../hooks/useCategory";
import { useParams } from "react-router-dom";
import CategoryRestroList from "./CategoryRestroList";

export const MainCategory = () => {
  const { menuId } = useParams();
  const category = useCategory(menuId);
  const { title, description } = category[0]?.card?.card || {};

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-4/5 mt-[150px]">
        <h1 className="font-semibold text-[40px] leading-[48px] text-[#282c3f]">
          {title}
        </h1>
        <p className="font-light text-[18px] leading-[22px] text-[#282c3f]">
          {description}
        </p>
        <CategoryRestroList category={category} />
      </div>
    </div>
  );
};

export default MainCategory;
