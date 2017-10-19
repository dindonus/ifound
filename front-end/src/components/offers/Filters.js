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
      <h3>Filtres</h3>
      <div class="btn-group mb-2" role="price">
        {filters.prices.map((price, index) => {
          const isActive = price.value === activeFilters.price;
          return (
            <button
              className={`${isActive ? 'active' : ''} btn btn-primary`}
              key={index}
              onClick={event => onChange('price', price.value)}
            >
              {price.text}
            </button>
          );
        })}
      </div>
      <div class="btn-group mb-2" role="capacity">
        {filters.capacities.map((capacity, index) => {
          const isActive = capacity.value === activeFilters.capacity;
          return (
            <button
              key={index}
              className={`${isActive ? 'active' : ''} btn btn-primary`}
              onClick={event => onChange('capacity', capacity.value)}
            >
              {capacity.text}
            </button>
          );
        })}
      </div>
      <input
        type="text"
        value={activeFilters.location}
        onChange={event => onChange('location', event.target.value)}
        className="form-control"
        placeholder="Ville ou département"
      />
    </section>
  );
};

export default Filters;
