import { takeLatest, put, all, call, select } from "@redux-saga/core/effects";
import UserActionTypes from "./user.types";
import axios from 'axios';
import { selectCurrentUser } from "./user.selectors";
import { signInSuccess,signInFailure, signUpSuccess, signUpFailure, updateUserFailure, updateUserSuccess, fetchUsersSuccess, fetchUsersFailure, adminUserSuccess, adminUserFailure } from "./user.actions";

export function* signIn({ payload: {email, password}}) {
  try{
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const {data} = yield axios.post(
      '/api/users/signin/', 
      {'username': email, 'password': password},
      config
    )
    yield put(signInSuccess(data))
  } catch(error) {
    yield put(signInFailure(error))
  }
}

// export function* signOut() {
//   yield put(signOutSuccess())
// }

export function* signUp({ payload: {email, password, name} }) {
  try{
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }

    const {data} = yield axios.post(
      '/api/users/register/', 
      {'name': name, 'email': email, 'password': password},
      config
    )

    yield put(signUpSuccess(data))
  } catch(error) {
    yield put(signUpFailure(error))
  }
}

export function* updateUser({ payload: userCredentials }){
  try{
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }

    const {data} = yield axios.put(
      '/api/users/profile/update/',
      userCredentials,
      config
    )

    yield put(updateUserSuccess(data))
  } catch(error) {
    yield put(updateUserFailure(error))
  }
}

export function* fetchUsers() {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const { data } = yield axios.get(
      '/api/users/',
      config
    )
    yield put(fetchUsersSuccess(data))
  } catch(error) {
    yield put(fetchUsersFailure(error))
  }
}

export function* adminUser({ payload: userId, isAdmin }) {
  try{
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const { data } = yield axios.put(
      `/api/users/update/${userId}/`,
      isAdmin,
      config
    )
    yield put(adminUserSuccess(data))
  } catch(error) {
    yield put(adminUserFailure(error))
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.USER_SIGNIN_REQUEST, signIn);
};

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.USER_SIGNUP_REQUEST, signUp);
};

export function* onUpdateStart() {
  yield takeLatest(UserActionTypes.USER_UPDATE_REQUEST, updateUser);
}

export function* fetchUsersStart() {
  yield takeLatest(UserActionTypes.USER_LIST_REQUEST, fetchUsers);
}

export function* adminUserStart() {
  yield takeLatest(UserActionTypes.ADMIN_USER_REQUEST, adminUser);
}

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignUpStart),
    call(onUpdateStart),
    call(fetchUsersStart),
    call(adminUserStart)
  ]);
};