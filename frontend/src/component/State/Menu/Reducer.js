import * as actionTypes from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
};

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.CREATE_MENU_ITEM_REQUEST:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionTypes.DELETE_MENU_ITEM_REQUEST:
    case actionTypes.UPDATE_MENU_ITEMS_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
        };

    case actionTypes.CREATE_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: [...state.menuItems, action.payload],
        };

    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: action.payload,
        };

    case actionTypes.UPDATE_MENU_ITEMS_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: state.menuItems.map(item =>
                item.id === action.payload.id ? action.payload : item
            ),
        };

    case actionTypes.DELETE_MENU_ITEM_SUCCESS:
        return {
            ...state,
            loading: false,
            menuItems: state.menuItems.filter(
                item => item.id !== action.payload
            ),
        };

    case actionTypes.CREATE_MENU_ITEM_FAILURE:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionTypes.UPDATE_MENU_ITEMS_FAILURE:
    case actionTypes.DELETE_MENU_ITEM_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

    default:
        return state;
  }
};

export default menuItemReducer;