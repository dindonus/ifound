import React from 'react';
import Price from '../utilities/Price';
import Capitalize from '../utilities/Capitalize';

const Offer = ({ data }) => (
  <article className="Offer">
    <div className="flex">
      <div className="picture">
        <img src={data.picture} alt="iPhone" />
      </div>
      <div className="informations">
        <h3>
          <Capitalize string={data.title} />
        </h3>
        <address>{data.location}</address>
        <div>{data.published.localized}</div>
        <div>
          <a href={data.href} target="_blank">
            Voir
          </a>
        </div>
      </div>
      <div className="price">
        <Price value={data.price} />
      </div>
    </div>
  </article>
);

export default Offer;
