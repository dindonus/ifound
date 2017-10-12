import React from 'react';

const Filters = ({ activeFilters, onChange }) => {
  const filters = {
    prices: [
      { value: 300, text: '300€' },
      { value: 400, text: '400€' },
      { value: 500, text: '500€' },
      { value: 600, text: '600€' },
      { value: 2000, text: 'Tous' }
    ],
    capacities: [
      { value: 32, text: '32 GB' },
      { value: 64, text: '64 GB' },
      { value: 128, text: '128 GB' },
      { value: 256, text: '256 GB' }
    ]
  };
  return (
    <section>
      <h3>Filters</h3>
      Prix :
      <ul>
        {filters.prices.map((price, index) => {
          const isActive = price.value === activeFilters.price;
          return (
            <li
              key={index}
              className={isActive ? 'active' : ''}
              onClick={event => onChange('price', price.value)}
            >
              {price.text}
            </li>
          );
        })}
      </ul>
      Mémoire :
      <ul>
        {filters.capacities.map((price, index) => (
          <li key={index} onClick={event => onChange('capacity', price.value)}>
            {price.text}
          </li>
        ))}
      </ul>
      Localisation :
      <input
        type="text"
        value={activeFilters.location}
        onChange={event => onChange('location', event.target.value)}
      />
    </section>
  );
};

export default Filters;
