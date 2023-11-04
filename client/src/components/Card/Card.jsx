import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
      <p>Phone:{props.phone}</p>
      <p>upiti:{props.upiti}</p>
    </div>
  );
};

export default Card;
