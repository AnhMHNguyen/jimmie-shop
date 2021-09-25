import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  directory: null,
  isFetching: false,
  error: null,
  errorReview: null,
  message: null,
  imageMessage:null,
  product: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
    case ShopActionTypes.FETCH_DIRECTORY_START:
    case ShopActionTypes.FETCH_PRODUCT_START:
    case ShopActionTypes.CREATE_PRODUCT_START:
    case ShopActionTypes.UPDATE_PRODUCT_START:
    case ShopActionTypes.DELETE_PRODUCT_START:
    case ShopActionTypes.UPLOAD_IMAGE_START:
    case ShopActionTypes.UPLOAD_REVIEW_START:
      return {
        ...state,
        isFetching: true,
        error: null, 
        errorReview: null, 
        message: null,
        imageMessage: null,
        // product: null
      }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case ShopActionTypes.FETCH_DIRECTORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        directory: action.payload
      }
    case ShopActionTypes.FETCH_PRODUCT_SUCCESS:
    case ShopActionTypes.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        product: action.payload
      }
    case ShopActionTypes.UPDATE_PRODUCT_SUCCESS:
    case ShopActionTypes.DELETE_PRODUCT_SUCCESS:
    case ShopActionTypes.UPLOAD_REVIEW_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.payload
      }
    case ShopActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        imageMessage: action.payload
      }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
    case ShopActionTypes.FETCH_PRODUCT_FAILURE:
    case ShopActionTypes.CREATE_PRODUCT_FAILURE:
    case ShopActionTypes.UPDATE_PRODUCT_FAILURE:
    case ShopActionTypes.DELETE_PRODUCT_FAILURE:
    case ShopActionTypes.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ShopActionTypes.UPLOAD_REVIEW_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorReview: action.payload
      }
    default: 
      return state;
  }
}

export default shopReducer;