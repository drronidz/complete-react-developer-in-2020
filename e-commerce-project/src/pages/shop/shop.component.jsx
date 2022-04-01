import React, {Component} from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import Route from "react-router-dom/es/Route";
import CategoryPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>)

export default ShopPage