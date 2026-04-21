import React, { useState } from 'react';
import './App.css';

const termsData = [
  { term: "API", definition: "A set of rules that allows different software applications to communicate with each other." },
  { term: "DOM", definition: "A programming interface for web documents that represents the page as a tree of objects." },
  { term: "FLASK", definition: "A micro web framework written in Python, designed to be easy to use and scale." },
  { term: "REACT", definition: "A popular JavaScript library used for building interactive and component-based user interfaces." },
  { term: "GIT", definition: "A version control system that tracks changes in your code and helps teams collaborate." },
  { term: "CSS", definition: "Language used for describing the presentation of web pages, including colors and layouts." },
  { term: "JSON", definition: "A lightweight format for storing and transporting data, often used when data is sent from a server." },
  { term: "HTTP", definition: "The foundation of any data exchange on the Web and a protocol used for fetching resources." },
];

const FlashCard = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container">
      <div 
        className={`card ${isFlipped ? 'is-flipped' : ''}`} 
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-face card-front">
          <h2>{term}</h2>
          <div className="tap-hint">Tap to define</div>
        </div>
        <div className="card-face card-back">
          <div className="back-label">Definition</div>
          <p>{definition}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <h1>Dev Terms Collection</h1>
      <div className="card-grid">
        {termsData.map((item, index) => (
          <FlashCard key={index} term={item.term} definition={item.definition} />
        ))}
      </div>
    </div>
  );
}

export default App;