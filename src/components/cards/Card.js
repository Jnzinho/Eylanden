import './card.css';
import { NavLink } from 'react-router-dom';

function Card({ config }) {
  return (
    <NavLink to={config.to}>
      <div className="card">
        <img
          className="card-background"
          src={config.background}
          alt="background"
        />
        {config.label && <p className="card-label">{config.label}</p>}
        <p className="card-title">{config.title}</p>
      </div>
    </NavLink>
  );
}

export default Card;
