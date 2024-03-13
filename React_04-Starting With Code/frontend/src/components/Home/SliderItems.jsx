import { Suspense, lazy } from "react";
import MainGridParts from "./MainGridParts";
import { Link } from "react-router-dom";

const SliderItems = ({ slider }) => {
  return (
    <>
      {slider.map((menuImg) => {
        const { id, imageId, entityId } = menuImg;

        const start = entityId.indexOf("=") + 1;
        const end = entityId.indexOf("&", start);
        const extractedString = entityId.substring(start, end);

        const start2 = entityId.indexOf("&") + 1;
        const end2 = entityId.indexOf("&", start2);
        const extractedString2 =
          end2 !== -1
            ? entityId.substring(start2, end2)
            : entityId.substring(start2);

        const menuId =
          extractedString.length === 0
            ? `${extractedString2}&tags=layout_BAU_Contextual`
            : `${extractedString}&${extractedString2}`;

        return (
            <Link key={id} to={"/category/" + menuId}>
              <MainGridParts image={imageId} />
            </Link>
        );
      })}
    </>
  );
};

export default SliderItems;
