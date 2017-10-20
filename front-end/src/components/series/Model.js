import React from 'react';
import { Link } from 'react-router-dom';
import RoundedPrice from '../utilities/RoundedPrice';
import Number from '../utilities/Number';

const Model = ({ model }) => (
  <div className="Model-line">
    <div>
      {model.name} <Number decimal="0">{model.stats.availables}</Number>
      <br />
      <Link className="tapped" to={`/offers/${model.slug}`}>
        <big>
          <RoundedPrice value={model.stats.price} />
        </big>
      </Link>
    </div>
  </div>
);

export default Model;
