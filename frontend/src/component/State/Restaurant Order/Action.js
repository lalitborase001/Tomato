export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

      const response = await api.put(
        `/api/admin/orders/${orderId}/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const updatedOrder = response.data;

      console.log("updated order ", updatedOrder);

      dispatch({
        type: UPDATE_ORDER_STATUS_SUCCESS,
        payload: updatedOrder,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ORDER_STATUS_FAILURE,
        payload: error,
      });
    }
  };
}; 

export const fetchRestaurantOrders = ({restaurantId,orderStatus, jwt}) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_RESTAURANT_ORDERS_REQUEST });
      const response = await api.get(
        `/api/admin/restaurants/${restaurantId}/orders?status=${orderStatus}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const orders = response.data;

      dispatch({
        type: GET_RESTAURANT_ORDERS_SUCCESS,
        payload: orders,
      });
    } catch (error) {
      dispatch({
        type: GET_RESTAURANT_ORDERS_FAILURE,
        payload: error,
      });
    }
  };
};