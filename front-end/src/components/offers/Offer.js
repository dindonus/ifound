import React from 'react';
import Price from '../utilities/Price';

const Offer = ({ data }) => (
  <div className="Offer">
    <h3>{data.title}</h3>
    <Price value={data.price} />
    {data.location}
  </div>
);

export default Offer;
