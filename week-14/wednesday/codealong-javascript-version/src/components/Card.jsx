import React from 'react';
import './Card.css';


const Card = ({ title, description, icon, color, isSelected, onSelect }) => {
  return (
    <div
      className={`card ${color} ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <img src={icon} alt={`${title} icon`} className="card-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="learn-more">Learn More</button>
    </div>
  );
};

export default Card;
