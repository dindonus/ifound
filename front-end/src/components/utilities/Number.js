import React from 'react';

const Number = ({ children, decimal }) => {
  children = parseInt(children, 10);
  children = children.toLocaleString('fr-FR', {
    minimumFractionDigits: decimal
  });
  return <span>{children}</span>;
};

export default Number;
