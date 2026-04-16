import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
} from "./ActionType";

export const findCart = (token) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
      const response = await api.get("/api/cart/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FIND_CART_FAILURE, payload: error });
    }
  };
};

export const getAllCartItems = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
    try {
      const response = await api.get("/api/cart/items/", {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });

      dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
    }
  };
};

export const addItemToCart = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
      const response = await api.post("/api/cart/add/", reqData.cartItem, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      console.log("Add to cart response:", response.data);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
    }
  };
};

export const updateCartItem = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CARTITEM_REQUEST });
    try {
      const response = await api.put("/api/cart/update/", reqData.cartItem, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      console.log("Update cart item response:", response.data);
      dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: response.data });
    } catch (error) {
      console.error("Error updating cart item:", error);
      dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error });
    }
  };
};

export const removeCartItem = ({cartItemId,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CARTITEM_REQUEST });
    try {
      const response = await api.delete(`/api/cart/remove/${cartItemId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error });
    }
  };
};
