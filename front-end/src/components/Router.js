import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SeriesIndex from './series/Index';
import ModelsIndex from './models/Index';
import OffersIndex from './offers/Index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={SeriesIndex} />
    <Route path="/models/:model" component={ModelsIndex} />
    <Route path="/offers/:model/:capacity" component={OffersIndex} />
  </Switch>
);

export default ContentRouter;
