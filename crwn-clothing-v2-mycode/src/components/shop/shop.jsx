import { Routes, Route } from "react-router-dom";
import "./shop.scss";
import CategoriesPreview from "../categories-preview/categories-preview";
import Categories from "../categories/categories";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoryAsync } from "../../redux/category/categoryAction";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categories" element={<Categories />} />
    </Routes>
  );
};

export default Shop;
