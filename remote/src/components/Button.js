import React from 'react';

const Button = (props) => {
  const text = props.text;
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
      { text }
    </button>
  );
};

export default Button; 