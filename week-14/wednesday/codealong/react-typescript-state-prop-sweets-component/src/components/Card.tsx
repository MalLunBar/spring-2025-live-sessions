import './Card.css';


const Card = ({ title, description, icon, color }) => {
  return (
    <div
      className={`card ${color}`}

    >
      <img src={icon} alt={`${title} icon`} className="card-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="learn-more">Learn More</button>
    </div>
  );
};

export default Card;
