import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.USER_SIGNOUT, clearCartOnSignOut);
}



export function* cartSagas() {
  yield all([
    call(onSignOut)
  ])
}