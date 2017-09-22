import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from './Series';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/view/:postId" component={Series} />
  </Switch>
);

export default ContentRouter;
