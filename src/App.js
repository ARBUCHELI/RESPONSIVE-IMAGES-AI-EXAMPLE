import React from 'react';
import ResponsiveImage from './ResponsiveImage';
import './App.css';

function App() {
  return (
    <div>
      <h1>Responsive Image Gallery</h1>
      <h3>Powered by AI Pair Programming</h3>
      <div className="gallery">
        <ResponsiveImage
          src="https://img.freepik.com/free-photo/young-beautiful-woman-holding-macaroons-pastry-her-hands_155003-12171.jpg?size=626&ext=jpg"
          alt="My Photo"
          className="gallery-image"
        />
        <ResponsiveImage
          src="https://img.freepik.com/free-photo/two-girls-twins-smiling-pointing-fingers-away-blue-wall_176420-17119.jpg?size=626&ext=jpg"
          alt="My Other Photo"
          className="gallery-image"
        />
        <ResponsiveImage
          src="https://img.freepik.com/free-photo/cheerful-blonde-twins-big-arrows_329181-10724.jpg?size=626&ext=jpg"
          alt="Yet Another Photo"
          className="gallery-image"
        />
      </div>
    </div>
  );
}

export default App;
