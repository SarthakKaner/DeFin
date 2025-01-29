import React from 'react';

const Cards = () => {
  const cardsData = [
    {
      title: 'Text-Based Search Engine',
      description: 'Accessible via the web for straightforward information retrieval.',
      icon: 'fa-bars',
    },
    {
      title: 'Advanced Search Engine',
      description: 'Features voice and image interaction for a more dynamic user experience.',
      icon: 'fa-search',
    },
    {
      title: 'Premium Chatbot',
      description: 'Coming soon....',
      icon: 'fa-comment-alt',
    },
    {
      title: 'Analysis Companion',
      description: 'Provides insights for charts and technical datasets.',
      icon: 'fa-database',
    },
    {
      title: 'Trading & Transaction Companion',
      description: 'Delivers proactive, real-time performance monitoring.',
      icon: 'fa-check-circle',
    },
  ];

  return (
    <div className="page-container mt-8 p-6">
      <div className="header mb-8">
        <h1>Designed to be</h1>
        <h1 className='text-white'>Inherently Multi-Modal</h1>
        <p className='mb-8'>(De)Fin AI's retail AI products will include:</p>
      </div>
      <div className="cards-container mt-8">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="icon">
              <i className={`fas ${card.icon}`}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;