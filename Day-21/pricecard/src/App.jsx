

import React from 'react';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className='head2'>{title}</h2>
      
      <div className="price">${price}/mon</div>
      <div className='F'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </div>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

const App = () => {
  const priceCardData = [
    {
      title: 'Basic Plan',
      price: 19.99,
      features: ['Contains Ads', 'Low Quality Stream', 'Normal Audio'],
    },
    {
      title: 'Pro Plan',
      price: 29.99,
      features: ['Early Access of shows', 'No Ads', 'No Premium contents', 'Login 2 devices'],
    },
    {
      title: 'Premium Plan',
      price: 39.99,
      features: ['All Premium Contents', 'No Ads', 'Login Many Devices', 'Live Matches No Ads', 'Unlimited Contents'],
    },
  ];

  return (
    <div className="App">
      <h1 class='head'>Choose a Plan</h1>
      <div className="price-cards">
        {priceCardData.map((card, index) => (
          <PriceCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
