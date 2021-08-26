import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
)

export const selectCollectionUrlParam = (state, collectionUrlParam) =>
  collectionUrlParam

export const selectCollection = createSelector(
  [selectCollections, selectCollectionUrlParam],
  (collections, collectionUrlParam) =>
    collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)
