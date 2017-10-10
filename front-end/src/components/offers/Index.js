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

/*
if (model) {
  const HeaderWithParams = () => <Header model={model} />;
  const ContentWithParams = () => <Content model={model} />;
  return (
    <div>
      <ContentPresenter
        header={HeaderWithParams}
        body={ContentWithParams}
      />
    </div>
  );
} else {
  return <div>Loading model information...</div>;
}
*/
