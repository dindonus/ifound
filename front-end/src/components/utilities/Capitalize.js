import React from 'react';

const CapitalizeWord = word => {
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return word.replace('Iphone', 'iPhone');
};

const Capitalize = ({ string }) => {
  return (
    <div>
      {string
        .split(' ')
        .map(CapitalizeWord)
        .join(' ')}
    </div>
  );
};

export default Capitalize;
