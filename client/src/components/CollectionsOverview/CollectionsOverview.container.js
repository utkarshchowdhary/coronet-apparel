import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import {
  selectIsCollectionFetching,
  selectCollectionsForPreview
} from '../../redux/shop/shop.selectors'
import CollectionsOverview from './CollectionsOverview'
import WithSpinner from '../WithSpinner/WithSpinner'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
