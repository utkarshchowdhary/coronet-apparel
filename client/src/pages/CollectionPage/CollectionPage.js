import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/CollectionItem/CollectionItem'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, props) => ({
  collection: selectCollection(state, props.match.params.collectionId)
})

export default connect(mapStateToProps)(CollectionPage)
