import * as actionTypes from "./ActionType";

const initialState = {
  ingredients: [],
  update: null,
  category: [],
  loading: false,
  error: null,
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {

    // ================= REQUEST =================
    case actionTypes.CREATE_INGREDIENT_REQUEST:
    case actionTypes.CREATE_INGREDIENT_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // ================= SUCCESS =================
    case actionTypes.GET_INGREDIENTS:
      return {
        ...state,
        loading: false,
        ingredients: action.payload,
      };

    case actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: [...state.category, action.payload],
      };

    case actionTypes.GET_INGREDIENT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };

    case actionTypes.CREATE_INGREDIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        ingredients: [...state.ingredients, action.payload],
      };

    case actionTypes.UPDATE_STOCK:
      return {
        ...state,
        loading: false,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient
        ),
      };

    // ================= FAILURE =================
    case actionTypes.CREATE_INGREDIENT_FAILURE:
    case actionTypes.CREATE_INGREDIENT_CATEGORY_FAILURE:
    case actionTypes.GET_INGREDIENT_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ingredientReducer;