import React from 'react';
import ContentPresenter from '../layouts/ContentPresenter';
import Header from './Header';
import Series from './Series';

const SeriesIndex = props => (
  <div>
    <ContentPresenter header={Header} body={Series} />
  </div>
);

export default SeriesIndex;
