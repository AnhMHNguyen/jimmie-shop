import { takeLatest, call, put, all, select } from "@redux-saga/core/effects";
import axios from 'axios';
import OrderActionTypes from "./order.types";
import { selectCurrentUser } from "../user/user.selectors";
import { createOrderSuccess, createOrderFailure,
         myOrdersSuccess, myOrdersFailure,
         orderDetailsSuccess, orderDetailsFailure, 
         allOrdersSuccess, allOrdersFailure,
         deliveredOrderSuccess, deliveredOrderFailure } from "./order.actions";

export function* createOrder({ payload: order}) {
  try{
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const {data}= yield axios.post(
      '/api/orders/add/',
      order,
      config
    )
    yield put(createOrderSuccess(data))
  } catch(error) {
    yield put(createOrderFailure(error))
  }
}

export function* myOrders() {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const {data}= yield axios.get(
      '/api/orders/myorders/',
      config
    )
    yield put(myOrdersSuccess(data))
  } catch(error) {
    yield put(myOrdersFailure(error))
  }
}

export function* orderDetails({ payload: orderId}) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const {data}= yield axios.get(
      `/api/orders/${orderId}/`,
      config
    )
    yield put(orderDetailsSuccess(data))
  } catch(error) {
    yield put(orderDetailsFailure(error))
  }
}

export function* allOrders() {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const {data}= yield axios.get(
      '/api/orders/',
      config
    )
    yield put(allOrdersSuccess(data))
  } catch(error) {
    yield put(allOrdersFailure(error))
  }
}

export function* deliveredOrder({payload: orderId}) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const {data}= yield axios.put(
      `/api/orders/${orderId}/delivered/`,
      {},
      config
    )
    yield put(deliveredOrderSuccess(data))
  } catch(error) {
    yield put(deliveredOrderFailure(error))
  }
}

export function* createOrderStart() {
  yield takeLatest(OrderActionTypes.ORDER_CREATE_REQUEST, createOrder)
}

export function* myOrdersStart() {
  yield takeLatest(OrderActionTypes.MY_ORDERS_REQUEST, myOrders)
}

export function* orderDetailsStart() {
  yield takeLatest(OrderActionTypes.ORDER_DETAILS_REQUEST, orderDetails)
}

export function* allOrdersStart() {
  yield takeLatest(OrderActionTypes.ALL_ORDERS_REQUEST, allOrders)
}

export function* deliveredOrderStart() {
  yield takeLatest(OrderActionTypes.ORDER_DELIVERED_REQUEST, deliveredOrder)
}

export function* orderSagas() {
  yield all([
    call(createOrderStart),
    call(myOrdersStart),
    call(orderDetailsStart),
    call(allOrdersStart),
    call(deliveredOrderStart)
  ])
}