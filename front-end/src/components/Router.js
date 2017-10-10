import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SeriesIndex from './series/Index';
import OffersIndex from './offers/Index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={SeriesIndex} />
    <Route path="/offers/:model" component={OffersIndex} />
  </Switch>
);

export default ContentRouter;
