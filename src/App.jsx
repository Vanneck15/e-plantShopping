import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={() => setShowProductList(true)}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <p className="aboutus_title">About Us</p>
              <p className="aboutus_text">
                Welcome to Paradise Nursery, where passion for nature meets your home. Our team is dedicated to providing high-quality plants that enhance the beauty of your surroundings and foster a healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;