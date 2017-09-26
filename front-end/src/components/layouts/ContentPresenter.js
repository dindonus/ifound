import React from 'react';

const ContentPresenter = ({ header, body }) => {
  console.log(header);
  return (
    <div>
      <div className="Content-header">{header}</div>
      <div className="Content-body">{body}</div>
    </div>
  );
};

export default ContentPresenter;
