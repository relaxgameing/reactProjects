import { categoryActionType } from "./categoryTypes";
import { createAction } from "../../utils/createAction";
import { getCategoriesAndDocument } from "../../firebase/fb-config";

export const fetchCategoryStart = () =>
  createAction(categoryActionType.FETCH_CATEGORY_START);

export const fetchCategorySuccess = (categoryMap) =>
  createAction(categoryActionType.FETCH_CATEGORY_SUCCESS, categoryMap);

export const fetchCategoryFailed = (error) =>
  createAction(categoryActionType.FETCH_CATEGORY_FAILED, error);

export const getCategoryAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categoryMap = await getCategoriesAndDocument();
    dispatch(fetchCategorySuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};
