import React from 'react';
import { Link } from 'react-router-dom';
import RoundedPrice from '../utilities/RoundedPrice';
import Number from '../utilities/Number';

const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
let count = 0;

const Model = ({ model }) => {
  const color = colors[count++ % (colors.length - 1)];
  return (
    <div className="Model-line">
      <div>
        <h3>{model.name}</h3>
        <Number decimal="0">{model.stats.availables}</Number> annonces {' '}
        <Link className={`tapped ${color}`} to={`/offers/${model.slug}`}>
          <big>
            <RoundedPrice value={model.stats.price} />
          </big>
        </Link>
      </div>
    </div>
  );
};

export default Model;
