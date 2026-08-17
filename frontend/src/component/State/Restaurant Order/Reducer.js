import * as actionTypes from "./ActionType"; // or "./ActionTypes"

const initialState = {
  loading: false,
  error: null,
  orders: [],
};

const restaurantsOrderReducer = (state = initialState, action) => {
  switch (action.type) {

    // ================= REQUEST =================
    case actionTypes.GET_RESTAURANT_ORDERS_REQUEST:
    case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // ================= SUCCESS =================
    case actionTypes.GET_RESTAURANT_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload,
      };

    case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
      };

    // ================= FAILURE =================
    case actionTypes.GET_RESTAURANT_ORDERS_FAILURE:
    case actionTypes.UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantsOrderReducer;