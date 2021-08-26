import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
)

export const selectCollection = createSelector(
  [selectCollections],
  (collections) =>
    memoize((collectionUrlParam) =>
      collections ? collections[collectionUrlParam] : null
    )
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)
