import UserActionTypes from "./user.types";


const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
  userList: null,
  message: null,
}

const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    
    case UserActionTypes.USER_SIGNIN_REQUEST:
    case UserActionTypes.USER_SIGNUP_REQUEST:
    case UserActionTypes.USER_UPDATE_REQUEST:
    case UserActionTypes.USER_LIST_REQUEST:
    case UserActionTypes.ADMIN_USER_REQUEST:
      return {
        ...state,
        loading:true,
        error: null,
        message: null
      }
    case UserActionTypes.USER_SIGNIN_SUCCESS:
    case UserActionTypes.USER_SIGNUP_SUCCESS:
    case UserActionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case UserActionTypes.USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      }
    case UserActionTypes.ADMIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      }
    case UserActionTypes.USER_SIGNIN_FAILURE:
    case UserActionTypes.USER_SIGNUP_FAILURE:
    case UserActionTypes.USER_UPDATE_FAILURE:
    case UserActionTypes.ADMIN_USER_FAILURE:
    case UserActionTypes.USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UserActionTypes.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case UserActionTypes.USER_SIGNOUT:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: null,
        userList:null, 
      }
    default:
      return state
  }
}

export default userReducer;