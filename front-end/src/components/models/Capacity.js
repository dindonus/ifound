import React from 'react';
import { Link } from 'react-router-dom';
import RoundedPrice from '../utilities/RoundedPrice';

const Capacity = ({ model, capacity }) => {
  const url = `/offers/${model.slug}/${capacity.value}`;
  return (
    <Link to={url}>
      <div className="Capacity-block">
        <h3>{capacity.value} Go</h3>
        <div className="price">
          <RoundedPrice value={capacity.price} />
        </div>
      </div>
    </Link>
  );
};

export default Capacity;
