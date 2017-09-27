import React from 'react';
import { Link } from 'react-router-dom';

const Model = ({ model }) => (
  <dl className="Model-line">
    <dt>{model.slug}</dt>
    <dd>
      {model.price}€
      <span className="details">{model.availables}</span>
      -
      <Link to={`/models/${model.slug}`}>Voir</Link>
    </dd>
  </dl>
);

export default Model;
