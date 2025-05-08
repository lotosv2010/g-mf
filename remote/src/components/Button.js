import React from 'react';

const Button = () => {
  return (
    <button
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={() => alert('Button from Remote App clicked!')}
    >
      Remote Button
    </button>
  );
};

export default Button; 