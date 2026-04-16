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