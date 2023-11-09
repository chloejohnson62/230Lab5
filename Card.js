import React from 'react';

function Card() {
  const leftHeadingStyle = {
    textAlign: 'left',
    marginLeft: '20px',
    padding: '10px',
  };
  const cardContainerStyle = {
    display: 'flex',           
    justifyContent: 'space-between',
    margin: '5px',
    padding: '20px',  
  };
  const cardStyle = {
    width: '50%', 
    padding: '20px',
  };
  const whiteCardStyle = {
    ...cardStyle,
    backgroundColor: 'white', 
  };
const contentStyle = {
  color: 'gray',
};
  const textStyles = {
    color: 'black', 
  };
  return (
    <div>
      <h1 style={leftHeadingStyle}>Card Components</h1>
    
    <div className="card-container" style={cardContainerStyle}>
   <div className="card" style={whiteCardStyle}>
      <div className="card-body">
        <h5 className="card-title" style={textStyles}>Card 01</h5>
        <p className="card-text" style={textStyles}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text" style={contentStyle}>Last updated 3 mins ago</p>
      </div>
    </div>
    <div className="card" style={whiteCardStyle}>
    <div className="card-body">
      <h5 className="card-title" style={textStyles}>Card 02</h5>
      <p className="card-text" style={textStyles}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text" style={contentStyle}>Last updated 3 mins ago</p>
      </div>
  </div>
  <div className="card" style={whiteCardStyle}>
  <div className="card-body">
    <h5 className="card-title" style={textStyles}>Card 03</h5>
    <p className="card-text" style={textStyles}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    <p className="card-text" style={contentStyle}>Last updated 3 mins ago</p>
      </div>
</div>
</div>
</div>
  );
}

export default Card;
