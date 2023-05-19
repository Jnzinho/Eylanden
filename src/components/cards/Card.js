// made for using in a grid of 3 cards per line
import './card.css';

function Card({ config }) {
  return (
    <div className="card">
      <img
        className="card-background"
        src={config.background}
        alt="background"
      />
      <p className="card-title">{config.title}</p>
    </div>
  );
}

export default Card;
