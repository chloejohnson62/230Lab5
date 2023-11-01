import React from 'react';

function Card() {
  const cardContainerStyle = {
    display: 'flex',           
    justifyContent: 'space-between',
    margin: '5px',
    padding: '50px',  
  };
  const cardStyle = {
    width: '25%',
    padding: '20px', 
  };
  const blueCardStyle = {
    ...cardStyle,
    backgroundColor: 'blue', 
  };

  const redCardStyle = {
    ...cardStyle,
    backgroundColor: 'red', 
  };

  const greenCardStyle = {
    ...cardStyle,
    backgroundColor: 'green', 
  };
  const textStyles = {
    color: 'white', 
  };
  return (
    <div className="card-container" style={cardContainerStyle}>
   <div className="card" style={blueCardStyle}>
      <div className="card-body">
        <h5 className="card-title" style={textStyles}>Card 01</h5>
        <p className="card-text" style={textStyles}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card" style={redCardStyle}>
    <div className="card-body">
      <h5 className="card-title" style={textStyles}>Card 02</h5>
      <p className="card-text" style={textStyles}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div className="card" style={greenCardStyle}>
  <div className="card-body">
    <h5 className="card-title" style={textStyles}>Card 03</h5>
    <p className="card-text" style={textStyles}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
  );
}

export default Card;
