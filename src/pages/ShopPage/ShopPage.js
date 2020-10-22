import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

import { ShopPageContainer } from './ShopPage.styles';

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;
