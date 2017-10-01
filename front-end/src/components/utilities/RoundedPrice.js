import React from 'react';

const RoundedPrice = ({ value }) => {
  value = Math.round(value / 10) * 10;
  return <span>{value} €</span>;
};

export default RoundedPrice;
