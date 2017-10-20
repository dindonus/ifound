import React from 'react';
import ButtonGroup from '../utilities/ButtonGroup';

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
  const pricesButtons = filters.prices.map(price => ({
    value: price.value,
    text: price.text,
    active: price.value === activeFilters.price,
    onClick: event => onChange('price', price.value)
  }));
  const capacitiesButtons = filters.capacities.map(capacity => ({
    value: capacity.value,
    text: capacity.text,
    active: capacity.value === activeFilters.price,
    onClick: event => onChange('capacity', capacity.value)
  }));
  return (
    <section>
      <h3>Filtres</h3>
      <div className="mb-3">
        <ButtonGroup buttons={pricesButtons} />
      </div>
      <div className="mb-3">
        <ButtonGroup buttons={capacitiesButtons} />
      </div>
      <div className="input-group">
        <input
          type="text"
          value={activeFilters.location}
          onChange={event => onChange('location', event.target.value)}
          className="form-control"
          placeholder="Ville ou département"
        />
      </div>
    </section>
  );
};

export default Filters;
