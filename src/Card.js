import React from 'react';

function Card() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="your-image-source" className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
