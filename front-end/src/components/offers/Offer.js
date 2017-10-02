import React from 'react';
import Price from '../utilities/Price';
import Capitalize from '../utilities/Capitalize';

const Offer = ({ data }) => (
  <article className="Offer">
    <h3>
      <Capitalize string={data.title} />
    </h3>
    <Price value={data.price} />
    <div>{data.location}</div>
    <div>{data.published.localized}</div>
  </article>
);

export default Offer;
