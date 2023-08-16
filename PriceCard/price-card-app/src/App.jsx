import React from 'react';

const PriceCard = () => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '36px',
    marginBottom: '15px',
  };

  const featuresStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  return React.createElement(
    'div',
    { style: cardStyle },
    React.createElement('h2', { style: titleStyle }, 'Standard Plan'),
    React.createElement('div', { style: priceStyle }, '$19.99/month'),
    React.createElement(
      'ul',
      { style: featuresStyle },
      React.createElement('li', null, '5GB Storage'),
      React.createElement('li', null, '10 Users'),
      React.createElement('li', null, 'Email Support')
    ),
    React.createElement(
      'button',
      { style: { backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' } },
      'Choose Plan'
    )
  );
};

export default PriceCard;
