import { Link } from "react-router-dom";
import ProductCard from "../productcard/productcard";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, item }) => {
  return (
    <div key={title} className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {item
          .filter((_, index) => index < 4)
          .map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
