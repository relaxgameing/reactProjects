import CategoryPreview from "../category-preview/category-preview";
import { useSelector } from "react-redux";
import {
  selectCategoryMap,
  selectIsLoading,
} from "../../redux/category/categorySelector";
import Spinner from "../spinner/spinner";

const CategoriesPreview = () => {
  const categoryMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="categories-preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoryMap).map((title) => {
          return (
            <CategoryPreview
              key={title}
              title={title}
              item={categoryMap[title]}
            />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
