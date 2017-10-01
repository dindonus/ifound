import React from 'react';
import Price from '../utilities/Price';
import Capitalize from '../utilities/Capitalize';

const Offer = ({ data }) => (
  <div className="Offer">
    <h3>
      <Capitalize string={data.title} />
    </h3>
    <Price value={data.price} />
    {data.location}
  </div>
);

export default Offer;
