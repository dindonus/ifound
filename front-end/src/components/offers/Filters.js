import React from 'react';

const Filters = ({ onChange }) => {
  const filters = {
    prices: [
      { value: 300, text: '- 300€' },
      { value: 400, text: '- 400€' },
      { value: 500, text: '- 500€' }
    ]
  };
  return (
    <section>
      <h3>Filters</h3>
      Prix :
      {filters.prices.map((price, index) => (
        <span key={index} onClick={event => onChange('price', price.value)}>
          {price.text}
        </span>
      ))}
    </section>
  );
};

export default Filters;
