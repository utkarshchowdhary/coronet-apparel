import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from '../CollectionItem/CollectionItem'

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from './CollectionPreview.styles'

const CollectionPreview = ({
  collection: { title, routeName, items },
  history,
  match
}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)
