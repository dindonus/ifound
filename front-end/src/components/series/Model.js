import React from 'react';
import { Link } from 'react-router-dom';
import RoundedPrice from '../utilities/RoundedPrice';

const Model = ({ model }) => (
  <dl className="Model-line">
    <dt>{model.name}</dt>
    <dd>
      <RoundedPrice value={model.stats.price} />
      -
      <Link to={`/models/${model.slug}`}>Voir</Link>
    </dd>
  </dl>
);

export default Model;
