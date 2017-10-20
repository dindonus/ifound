import React from 'react';

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="btn-group">
      {buttons.map((button, index) => {
        return (
          <button
            className={`${button.active ? 'active' : ''} btn btn-primary`}
            key={index}
            onClick={button.onClick}
          >
            {button.text}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
