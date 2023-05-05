import React from 'react';
import ResponsiveImage from './ResponsiveImage';
import './App.css';

function App() {
  return (
    <div>
      <h1>My Gallery</h1>
      <div className="gallery">
        <ResponsiveImage
          src="https://bucheli-web-personal-portfolio-website.netlify.app/images-projects/bucheli-restaurants.jpg"
          alt="My Photo"
          className="gallery-image"
        />
        <ResponsiveImage
          src="https://bucheli-web-personal-portfolio-website.netlify.app/images-projects/30-divulgation-books.jpg"
          alt="My Other Photo"
          className="gallery-image"
        />
        <ResponsiveImage
          src="https://bucheli-web-personal-portfolio-website.netlify.app/images-projects/my-coding-education-budget.jpg"
          alt="Yet Another Photo"
          className="gallery-image"
        />
      </div>
    </div>
  );
}

export default App;
