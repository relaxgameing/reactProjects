import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../productcard/productcard";
import "./categories.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCategoryMap,
  selectIsLoading,
} from "../../redux/category/categorySelector";
import Spinner from "../spinner/spinner";

const Categories = () => {
  const { categories } = useParams();
  const categoryMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoryMap[categories]);
  }, [categories, categoryMap]);

  return (
    <Fragment>
      <h2 className="category-title">{categories.toUpperCase()}</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
      )}
    </Fragment>
  );
};

export default Categories;
