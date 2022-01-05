import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import CollectionsOverview from '../collections-overview/collections-overview.component.jsx';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
