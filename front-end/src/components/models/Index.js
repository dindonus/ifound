import React from 'react';
import ContentPresenter from '../layouts/ContentPresenter';
import Header from './Header';
import Content from './Content';

const ModelsIndex = ({ match }) => {
  const slug = match.params.model;
  const HeaderWithParams = () => <Header model={slug} />;
  const ContentWithParams = () => <Content model={slug} />;
  return (
    <div>
      <ContentPresenter header={HeaderWithParams} body={ContentWithParams} />
    </div>
  );
};

export default ModelsIndex;
