import UserActionTypes from "./user.types";


export const signInStart = emailAndPassword => ({
  type: UserActionTypes.USER_SIGNIN_REQUEST,
  payload: emailAndPassword
});


export const signInSuccess = user => ({
  type: UserActionTypes.USER_SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.USER_SIGNIN_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.USER_SIGNUP_REQUEST,
  payload: userCredentials
});

export const signUpSuccess = user => ({
  type: UserActionTypes.USER_SIGNUP_SUCCESS,
  payload: user
});

export const signUpFailure = error => ({
  type: UserActionTypes.USER_SIGNUP_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
});

export const updateUserStart = userCredentials => ({
  type: UserActionTypes.USER_UPDATE_REQUEST,
  payload: userCredentials
})

export const updateUserSuccess = user => ({
  type: UserActionTypes.USER_UPDATE_SUCCESS,
  payload: user
})

export const updateUserFailure = error => ({
  type: UserActionTypes.USER_UPDATE_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const fetchUsersStart = () => ({
  type: UserActionTypes.USER_LIST_REQUEST
})

export const fetchUsersSuccess = userList => ({
  type: UserActionTypes.USER_LIST_SUCCESS,
  payload: userList
})

export const fetchUsersFailure = error => ({
  type: UserActionTypes.USER_LIST_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const adminUserStart = (userId, isAdmin) => ({
  type: UserActionTypes.ADMIN_USER_REQUEST,
  payload: userId, isAdmin
})

export const adminUserSuccess = message => ({
  type: UserActionTypes.ADMIN_USER_SUCCESS,
  payload: message
})

export const adminUserFailure = error => ({
  type: UserActionTypes.ADMIN_USER_FAILURE,
  payload: error.response && error.response.data.detail 
  ? error.response.data.detail 
  : error.message
})

export const signOut = () => ({
  type: UserActionTypes.USER_SIGNOUT
});

