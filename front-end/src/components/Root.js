import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import Router from './Router';

const Root = () => (
  <BrowserRouter>
    <Main>
      <Router />
    </Main>
  </BrowserRouter>
);

export default Root;
