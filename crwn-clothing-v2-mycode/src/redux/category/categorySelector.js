import { createSelector } from "reselect";

const category = (state) => state.category;

export const selectCategoryMap = createSelector(
  [category],
  (category) => category.categoryMap
);

export const selectIsLoading = createSelector(
  [category],
  (category) => category.isLoading
);
