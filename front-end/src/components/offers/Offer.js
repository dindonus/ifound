import React from 'react';
import Price from '../utilities/Price';
import Capitalize from '../utilities/Capitalize';

const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
let count = 0;

const Offer = ({ data }) => {
  const color = colors[count++ % (colors.length - 1)];
  return (
    <article className="Offer">
      <figure>
        <img src={data.picture} alt="iPhone" />
      </figure>
      <h3>
        <Capitalize string={data.title} />
      </h3>
      <p className="infos">
        <address>{data.location}</address>
        <time>{data.published.localized}</time>
      </p>
      <div className="price">
        <a href={data.href} target="_blank" class={`tapped ${color}`}>
          <Price value={data.price} />
        </a>
      </div>
    </article>
  );
};

export default Offer;
