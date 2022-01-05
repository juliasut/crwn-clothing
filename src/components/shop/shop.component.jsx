import { Route } from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component.jsx';

import CollectionsOverview from '../collections-overview/collections-overview.component.jsx';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
