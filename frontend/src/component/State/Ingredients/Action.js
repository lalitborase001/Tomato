export const getIngredientsOfRestaurant = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `/api/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log("get all ingredients ", response.data);

      dispatch({
        type: GET_INGREDIENTS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const createIngredient = ({ data, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_REQUEST });
    try {
      const response = await api.post(
        `/api/admin/ingredients`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      dispatch({
        type: CREATE_INGREDIENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_INGREDIENT_FAILURE,
        payload: error,
      });
    }
  };
};

export const createIngredientCategory = ({ data, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
    try {
      const response = await api.post(
        `/api/admin/ingredients/categories`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };
};

export const getIngredientCategories = ({id, jwt}) => {
  return async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_CATEGORIES_REQUEST });
    try {
      const response = await api.get(
        `/api/admin/ingredients/restaurant/${id}/categories`,
        {
           headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_INGREDIENT_CATEGORIES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_INGREDIENT_CATEGORIES_FAILURE,  
        payload: error,
      });
    }
  };
};

export const updateStockOfIngredient = ({ Id, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_INGREDIENT_STOCK_REQUEST });
    try { 
      const response = await api.put(
        `/api/admin/ingredients/${Id}/stock`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_INGREDIENT_STOCK_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_INGREDIENT_STOCK_FAILURE,
        payload: error,
      });
    }
  };
};
