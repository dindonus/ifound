import React from 'react';
import ContentPresenter from '../layouts/ContentPresenter';
import Header from './Header';
import Content from './Content';

const OffersIndex = props => (
  <div>
    <ContentPresenter header={Header} body={Content} />
  </div>
);

export default OffersIndex;
