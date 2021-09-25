import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser 
);

export const selectUserList = createSelector(
  [selectUser],
  (user) => user.userList
);

export const selectUserMessage = createSelector(
  [selectUser],
  user => user.message
);

export const selectUserError = createSelector(
  [selectUser],
  user => user.error
)