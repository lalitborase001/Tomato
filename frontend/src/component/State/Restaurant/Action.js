export const getAllRestaurantsAction = (token) => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_RESTAURANTS_REQUEST});
    try {
      const { data } = await api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data});
      console.log("all restaurant ", data);

    } catch (error) {
      console.log("error", error);
      dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload: error});
    }
  };
};
export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const response = await api.get(
        `api/restaurants/${reqData.restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );

      dispatch({
        type: GET_RESTAURANT_BY_ID_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_RESTAURANT_BY_ID_FAILURE,
        payload: error,
      });
    }
  };
};

export const getRestaurantByUserId = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
    try {
      const response = await api.get(
        `api/restaurants/user/${reqData.userId}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      console.log("restaurants by user id ", response.data);
      dispatch({
        type: GET_RESTAURANT_BY_USER_ID_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_RESTAURANT_BY_USER_ID_FAILURE,
        payload: error,
      });
    }
  };
};

export const createRestaurant = (reqData) => {
  console.log("token----- ", reqData.token);
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const response = await api.post(
        "api/restaurants",
        reqData.restaurantData,
        {
          headers: {
            Authorization: `Bearer ${reqData.token}`,
          },
        }
      );
      dispatch({
        type: CREATE_RESTAURANT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: CREATE_RESTAURANT_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateRestaurant = ({restaurantId,restaurantData,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });
    try {
      const response = await api.put(
        `api/restaurants/${restaurantId}`,
        restaurantData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_RESTAURANT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: UPDATE_RESTAURANT_FAILURE,
        payload: error,
      });
    }
  };
};

export const deleteRestaurant = ({restaurantId,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });
    try {
      await api.delete(
        `api/restaurants/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: DELETE_RESTAURANT_SUCCESS,
        payload: restaurantId,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: DELETE_RESTAURANT_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateRestaurantStatus = ({restaurantId,status,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const response = await api.patch(
        `api/admin/restaurants/${restaurantId}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_FAILURE,
        payload: error,
      });
    }
  };
};

export const createEventAction = ({data,jwt,restaurantId}) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const response = await api.post(
        `api/admin/restaurants/${restaurantId}/events`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: CREATE_EVENTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: CREATE_EVENTS_FAILURE,
        payload: error,
      });
    }
  };
};

export const getAllEvents = ({jwt}) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const response = await api.get(
        `api/events`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_ALL_EVENTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({  
      type: GET_ALL_EVENTS_FAILURE,
      payload: error,
    });
    }
  };
};

export const deleteEventAction = ({eventId,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      await api.delete(
        `api/admin/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: DELETE_EVENTS_SUCCESS,
        payload: eventId,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: DELETE_EVENTS_FAILURE,
        payload: error,
      });
    }
  };
};

export const getRestaurantsEvents = ({restaurantId,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
    try {
      const response = await api.get(
        `api/restaurants/${restaurantId}/events`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_RESTAURANTS_EVENTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_RESTAURANTS_EVENTS_FAILURE,
        payload: error,
      });
    }
  };
};

export const createCategoryAction = ({reqData,restaurantId}) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const response = await api.post(
        `api/admin/restaurants/${restaurantId}/categories`,
        reqData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: CREATE_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };
};

export const getRestaurantsCategory = ({restaurantId,jwt}) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
    try {
      const response = await api.get(
        `api/restaurants/${restaurantId}/categories`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_RESTAURANTS_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_RESTAURANTS_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };
};
