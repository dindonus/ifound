import React from 'react';
import Model from './Model';

const ModelsGroup = ({ models, image }) => (
  <div className="ModelsGroup flex">
    <div className="picture">
      <img src={image} alt="iphone" height="150px" />
    </div>
    <div className="models">
      {models.map(
        (model, index) => (model ? <Model key={index} model={model} /> : '...')
      )}
    </div>
  </div>
);

export default ModelsGroup;
