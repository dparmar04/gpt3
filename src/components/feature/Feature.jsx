import React, { useState }  from 'react';
import './feature.css';
const Feature = ({ title, text }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [secondDivWidth, setSecondDivWidth] = useState(38);

  const handleMouseOver = () => {
    setIsHovered(true);
    setSecondDivWidth(180);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setSecondDivWidth(38);
  };

  return (
  <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title"
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div style={{ width: secondDivWidth }}/>
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature;
