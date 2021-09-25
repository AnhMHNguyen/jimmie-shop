import OrderActionTypes from "./order.types";

export const createOrderStart = order => ({
  type: OrderActionTypes.ORDER_CREATE_REQUEST,
  payload: order
})

export const createOrderSuccess = message => ({
  type: OrderActionTypes.ORDER_CREATE_SUCCESS,
  payload: message
})

export const createOrderFailure = error => ({
  type: OrderActionTypes.ORDER_CREATE_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const myOrdersStart = () => ({
  type: OrderActionTypes.MY_ORDERS_REQUEST
})

export const myOrdersSuccess = orderList => ({
  type: OrderActionTypes.MY_ORDERS_SUCCESS,
  payload: orderList
})

export const myOrdersFailure = error => ({
  type: OrderActionTypes.MY_ORDERS_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const allOrdersStart = () => ({
  type: OrderActionTypes.ALL_ORDERS_REQUEST
})

export const allOrdersSuccess = orderList => ({
  type: OrderActionTypes.ALL_ORDERS_SUCCESS,
  payload: orderList
})

export const allOrdersFailure = error => ({
  type: OrderActionTypes.ALL_ORDERS_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const orderDetailsStart = orderId => ({
  type: OrderActionTypes.ORDER_DETAILS_REQUEST,
  payload: orderId
})

export const orderDetailsSuccess = order => ({
  type: OrderActionTypes.ORDER_DETAILS_SUCCESS,
  payload: order
})

export const orderDetailsFailure = error => ({
  type: OrderActionTypes.ORDER_DETAILS_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const deliveredOrderStart = orderId => ({
  type: OrderActionTypes.ORDER_DELIVERED_REQUEST,
  payload: orderId
})

export const deliveredOrderSuccess = message => ({
  type: OrderActionTypes.ORDER_DELIVERED_SUCCESS,
  payload: message
})

export const deliveredOrderFailure = error => ({
  type: OrderActionTypes.ORDER_DELIVERED_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})