import { createSelector } from "reselect";

const selectOrder = state => state.order;

export const selectOrderDetails = createSelector(
  [selectOrder],
  order => order.order
);

export const selectOrderList = createSelector(
  [selectOrder],
  order => order.orderList
);

export const selectOrderMessage = createSelector(
  [selectOrder],
  order => order.message
);

export const selectIsOrderLoading = createSelector(
  [selectOrder],
  order => order.loading
); 
export const selectOrderError = createSelector(
  [selectOrder],
  order => order.error
); 