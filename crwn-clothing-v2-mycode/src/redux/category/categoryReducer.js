import { categoryActionType } from "./categoryTypes";

const CategoryinitialState = {
  categoryMap: {},
  isLoading: false,
  error: null,
};

export const categoryMapReducer = (
  state = CategoryinitialState,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case categoryActionType.FETCH_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case categoryActionType.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryMap: payload,
        isLoading: false,
      };
    case categoryActionType.FETCH_CATEGORY_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
