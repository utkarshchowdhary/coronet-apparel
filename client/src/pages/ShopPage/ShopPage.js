import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import {
  fetchCollectionsStart,
  resetCollections
} from '../../redux/shop/shop.actions'
import Spinner from '../../components/Spinner/Spinner'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverview.container')
)
const CollectionPageContainer = lazy(() =>
  import('../CollectionPage/CollectionPage.container')
)

const ShopPage = ({ fetchCollectionsStart, resetCollections, match }) => {
  useEffect(() => {
    fetchCollectionsStart()

    return resetCollections
  }, [fetchCollectionsStart, resetCollections])

  return (
    <Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </Suspense>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  resetCollections: () => dispatch(resetCollections())
})

export default connect(null, mapDispatchToProps)(ShopPage)
