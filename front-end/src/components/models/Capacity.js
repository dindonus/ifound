import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../utilities/Price';

const Capacity = ({ model, capacity }) => {
  const url = `/offers/${model.slug}/${capacity.capacity}`;
  return (
    <Link to={url}>
      <div className="Capacity-block">
        <h3>{capacity.capacity} Go</h3>
        <div className="price">
          <Price value={capacity.price} />
        </div>
      </div>
    </Link>
  );
};

export default Capacity;
