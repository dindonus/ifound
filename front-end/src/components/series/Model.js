import React from 'react';
import { Link } from 'react-router-dom';
import RoundedPrice from '../utilities/RoundedPrice';

const Model = ({ model }) => (
  <dl className="Model-line">
    <dt>
      {model.name} -
      <Link to={`/models/${model.slug}`}>
        <button>
          <strong>{model.stats.availables}</strong> annonces
        </button>
      </Link>
    </dt>
    <dd>
      <big>
        <RoundedPrice value={model.stats.price} />
      </big>
    </dd>
  </dl>
);

export default Model;
