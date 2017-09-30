import React from 'react';

const Price = ({ value }) => {
  value = Math.round(value / 10) * 10;
  return <span>{value} €</span>;
};

export default Price;
