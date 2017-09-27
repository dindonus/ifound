import React from 'react';

const ContentPresenter = ({ header, body }) => {
  const Header = header;
  const Body = body;
  return (
    <div>
      <div className="Content-header">
        <Header />
      </div>
      <div className="Content-body">
        <Body />
      </div>
    </div>
  );
};

export default ContentPresenter;
