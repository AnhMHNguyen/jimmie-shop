import { takeLatest, call, put, all, select } from "@redux-saga/core/effects";
import axios from 'axios';
import ShopActionTypes from "./shop.types";
import { selectCurrentUser } from "../user/user.selectors";
import { fetchCollectionsSuccess, fetchCollectionsFailure, fetchProductSuccess, fetchProductFailure, createProductSuccess, createProductFailure, updateProductSuccess, updateProductFailure, uploadImageSuccess, uploadImageFailure, deleteProductSuccess, deleteProductFailure, uploadReviewSuccess, uploadReviewFailure, fetchDirectorySuccess, fetchDirectoryFailure} from "./shop.actions";

export function* fetchCollections({ payload: category}) {
  try {
    const { data } = yield axios.get(`/api/products/${category}/`);
    yield put(fetchCollectionsSuccess(data))
  } catch(error) {
    yield put(fetchCollectionsFailure(error))
  }
}

export function* fetchDirectory() {
  try {
    const { data } = yield axios.get(`/api/products/category/`);
    yield put(fetchDirectorySuccess(data))
  } catch(error) {
    yield put(fetchDirectoryFailure(error))
  }
}

export function* fetchProduct({ payload: { productId }}) {
  try {
    const { data } = yield axios.get(`/api/products/product/${productId}/`);
    yield put(fetchProductSuccess(data))
  } catch(error) {
    yield put(fetchProductFailure(error))
  }
}

export function* createProduct() {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const { data } = yield axios.post(
      '/api/products/create/',
      currentUser,
      config
    )

    yield put(createProductSuccess(data))
  } catch(error) {
    yield put(createProductFailure(error))
  }
}

export function* updateProduct({ payload: product, id }) {
  console.log(id)
  try{
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const { data } = yield axios.put(
      `/api/products/update/${id}/`,
      product,
      config
    )
    yield put(updateProductSuccess(data))
  } catch(error) {
    yield put(updateProductFailure(error))
  }
}

export function* deleteProduct({payload: productId}) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const { data } = yield axios.delete(
      `/api/products/delete/${productId}/`,
      config
    )
    yield put(deleteProductSuccess(data))
  } catch(error) {
    yield put(deleteProductFailure(error))
  }
}

export function* uploadImage({payload: formData}){
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const {data} = yield axios.post(
      '/api/products/upload/',
      formData,
      config
    )
    yield put(uploadImageSuccess(data))
  } catch(error) {
    yield put(uploadImageFailure(error))
  }
}

export function* uploadReview({ payload: productId, review }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      }
    }
    const { data } = yield axios.post(
      `/api/products/${productId}/reviews/`,
      review,
      config
    )

    yield put(uploadReviewSuccess(data))
  } catch(error) {
    yield put(uploadReviewFailure(error))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections)
}

export function* fetchDirectoryStart() {
  yield takeLatest(ShopActionTypes.FETCH_DIRECTORY_START, fetchDirectory)
}

export function* fetchProductStart() {
  yield takeLatest(ShopActionTypes.FETCH_PRODUCT_START, fetchProduct)
}

export function* createProductStart() {
  yield takeLatest(ShopActionTypes.CREATE_PRODUCT_START, createProduct)
}

export function* updateProductStart() {
  yield takeLatest(ShopActionTypes.UPDATE_PRODUCT_START, updateProduct)
}

export function* deleteProductStart() {
  yield takeLatest(ShopActionTypes.DELETE_PRODUCT_START, deleteProduct)
}

export function* uploadImageStart() {
  yield takeLatest(ShopActionTypes.UPLOAD_IMAGE_START, uploadImage)
}

export function* uploadReviewStart() {
  yield takeLatest(ShopActionTypes.UPLOAD_REVIEW_START, uploadReview)
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(fetchDirectoryStart),
    call(fetchProductStart),
    call(createProductStart),
    call(updateProductStart),
    call(deleteProductStart),
    call(uploadImageStart),
    call(uploadReviewStart)
  ]);
};