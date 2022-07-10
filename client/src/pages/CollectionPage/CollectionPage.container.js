import { connect } from 'react-redux'
import { compose } from 'redux'

import {
  selectIsCollectionFetching,
  selectCollection
} from '../../redux/shop/shop.selectors'
import CollectionPage from './CollectionPage'
import WithSpinner from '../../components/WithSpinner/WithSpinner'

const mapStateToProps = (state, props) => ({
  isLoading: selectIsCollectionFetching(state),
  collection: selectCollection(state, props.match.params.collectionId)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
