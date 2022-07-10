import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectIsCollectionFetching = createSelector(
  selectShop,
  (shop) => shop.isFetching
)

export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  selectCollections,
  (collections) => (collections ? Object.values(collections) : [])
)

export const selectCollection = createSelector(
  selectCollections,
  (_state, collectionUrlParam) => collectionUrlParam,
  (collections, collectionUrlParam) =>
    collections ? collections[collectionUrlParam] : null
)
