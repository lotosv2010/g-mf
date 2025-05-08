import React from 'react';

const Header = (props) => {
  const title = props.title;
  return (
    <header style={{
      backgroundColor: '#4096ff',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0 }}>{ title }</h1>
    </header>
  );
};

export default Header; 