import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  icon: string;
  color: 'purple' | 'teal' | 'coral';
  isSelected: boolean;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, icon, color, isSelected, onSelect }) => {
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
