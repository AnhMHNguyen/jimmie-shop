import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (category="") =>
  createSelector(
    [selectShopCollections],
    collections => !collections ? null : category ? collections.filter(item => item.category === category) : collections 
  );

export const selectShopDirectory = createSelector(
  [selectShop],
  shop => shop.directory
);

export const selectShopProduct = createSelector(
  [selectShop],
  shop => shop.product
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
); 

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)

export const selectShopMessage = createSelector(
  [selectShop],
  shop => shop.message
);

export const selectImageMessage = createSelector(
  [selectShop],
  shop => shop.imageMessage
);

export const selectShopFeatured = createSelector(
  [selectShopCollections],
  collections => collections ? collections.filter(item => item._id < 9) : []
)

export const selectShopError = createSelector(
  [selectShop],
  shop => shop.error
)
export const selectReviewError = createSelector(
  [selectShop],
  shop => shop.errorReview
)
