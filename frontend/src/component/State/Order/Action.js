export const createOrder = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
      const { data } = await api.post("/api/order", reqData.order, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });

      if (data.payment_url) {
        window.location.href = data.payment_url;
      }

      console.log("created order data", data);
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("error ", error);
      dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    }
  };
};