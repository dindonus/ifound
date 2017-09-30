import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../utilities/Price';

const Model = ({ model }) => (
  <dl className="Model-line">
    <dt>{model.name}</dt>
    <dd>
      <Price value={model.stats.price} />
      <span className="details">{model.stats.availables}</span>
      -
      <Link to={`/models/${model.slug}`}>Voir</Link>
    </dd>
  </dl>
);

export default Model;
