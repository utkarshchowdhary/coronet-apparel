import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './ShopPage.styles';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
