import React from 'react';
import Capacity from './Capacity';

const Content = ({ model }) => (
  <div>
    <div className="Content-capacities-container">
      {model.capacities.map((capacity, index) => (
        <Capacity key={index} model={model} capacity={capacity} />
      ))}
    </div>
  </div>
);

export default Content;
