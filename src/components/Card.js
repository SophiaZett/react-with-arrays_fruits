import "./Card.css";

export default function Card({ name, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <p>{name}</p>
    </div>
  );
}

//<p className="card">{name}</p>
