import ShopActionTypes from "./shop.types";


export const fetchCollectionsStart = (category='') => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START, 
  payload: category
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const fetchDirectoryStart = () => ({
  type: ShopActionTypes.FETCH_DIRECTORY_START
});

export const fetchDirectorySuccess = directoryMap => ({
  type: ShopActionTypes.FETCH_DIRECTORY_SUCCESS,
  payload: directoryMap
});

export const fetchDirectoryFailure = error => ({
  type: ShopActionTypes.FETCH_DIRECTORY_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const fetchProductStart = productId => ({
  type: ShopActionTypes.FETCH_PRODUCT_START, 
  payload: productId
});

export const fetchProductSuccess = product => ({
  type: ShopActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product
});

export const fetchProductFailure = error => ({
  type: ShopActionTypes.FETCH_PRODUCT_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const createProductStart = () => ({
  type: ShopActionTypes.CREATE_PRODUCT_START
})

export const createProductSuccess = product => ({
  type: ShopActionTypes.CREATE_PRODUCT_SUCCESS,
  payload: product
})

export const createProductFailure = error => ({
  type: ShopActionTypes.CREATE_PRODUCT_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const updateProductStart = (product, id) => ({
  type: ShopActionTypes.UPDATE_PRODUCT_START,
  payload: product, id
})

export const updateProductSuccess = message => ({
  type: ShopActionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: message
})

export const updateProductFailure = error => ({
  type: ShopActionTypes.UPDATE_PRODUCT_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const deleteProductStart = productId => ({
  type: ShopActionTypes.DELETE_PRODUCT_START,
  payload: productId
})

export const deleteProductSuccess = message => ({
  type: ShopActionTypes.DELETE_PRODUCT_SUCCESS,
  payload: message
})

export const deleteProductFailure = error => ({
  type: ShopActionTypes.DELETE_PRODUCT_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const uploadImageStart = formData=> ({
  type: ShopActionTypes.UPLOAD_IMAGE_START,
  payload: formData
})

export const uploadImageSuccess = message => ({
  type: ShopActionTypes.UPLOAD_IMAGE_SUCCESS,
  payload: message
})

export const uploadImageFailure = error => ({
  type: ShopActionTypes.UPLOAD_IMAGE_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})
export const uploadReviewStart = (productId, review) => ({
  type: ShopActionTypes.UPLOAD_REVIEW_START,
  payload: productId, review
})

export const uploadReviewSuccess = message => ({
  type: ShopActionTypes.UPLOAD_REVIEW_SUCCESS,
  payload: message
})

export const uploadReviewFailure = error => ({
  type: ShopActionTypes.UPLOAD_REVIEW_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

