import React from 'react';

const Model = ({ model }) => (
  <dl className="Model-line">
    <dt>{model.slug}</dt>
    <dd>
      {model.price}€
      <span className="details">{model.availables}</span>
    </dd>
  </dl>
);

export default Model;
