import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  error: null,
  order: null,
  message: null,
  loading: false,
  orderList:null,
}

const orderReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case OrderActionTypes.ORDER_CREATE_REQUEST:
    case OrderActionTypes.MY_ORDERS_REQUEST:
    case OrderActionTypes.ORDER_DETAILS_REQUEST:
    case OrderActionTypes.ALL_ORDERS_REQUEST:
    case OrderActionTypes.ORDER_DELIVERED_REQUEST:
      return {
        ...state,
        loading: true, 
        error: null, 
        message: null
      }
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
    case OrderActionTypes.ORDER_DELIVERED_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload
      }
    case OrderActionTypes.ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload
      }
    case OrderActionTypes.MY_ORDERS_SUCCESS:
    case OrderActionTypes.ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orderList: action.payload
      }
    case OrderActionTypes.ORDER_CREATE_FAILURE:
    case OrderActionTypes.MY_ORDERS_FAILURE:
    case OrderActionTypes.ALL_ORDERS_FAILURE:
    case OrderActionTypes.ORDER_DETAILS_FAILURE:
    case OrderActionTypes.ORDER_DELIVERED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: 
      return state
  }

}

export default orderReducer