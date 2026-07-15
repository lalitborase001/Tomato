import * as actionTypes from "./ActionType"; // or "./ActionTypes"

const initialState = {
  loading: false,
  orders: [],
  notifications: [],
  error: null,
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.GET_USERS_ORDERS_REQUEST:
    case actionTypes.GET_USERS_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.GET_USERS_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: payload,
      };

    case actionTypes.GET_USERS_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        notifications: payload,
      };

    case actionTypes.GET_USERS_ORDERS_FAILURE:
    case actionTypes.GET_USERS_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default orderReducer;