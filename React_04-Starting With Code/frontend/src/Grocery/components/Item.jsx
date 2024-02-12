import useCategoryImage from "../../hooks/useCategoryImage";
import "./Item.css";

const Item = ({ product }) => {
  const categoryImage = useCategoryImage(product.imageId);
  return (
    <div className="product-item">
      <img className="product-img" src={categoryImage} alt={product.name} />
      <span className="product-name-item">{product.displayName || ""}</span>
    </div>
  );
};

export default Item;
