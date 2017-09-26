import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SeriesIndex from './series/Index';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={SeriesIndex} />
    <Route path="/models/:model" component={SeriesIndex} />
    <Route path="/offers/:model/:capacity" component={SeriesIndex} />
  </Switch>
);

export default ContentRouter;
