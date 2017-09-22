import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import ContentRouter from './ContentRouter';

const Root = () => (
  <BrowserRouter>
    <Main>
      <ContentRouter />
    </Main>
  </BrowserRouter>
)

export default Root;
