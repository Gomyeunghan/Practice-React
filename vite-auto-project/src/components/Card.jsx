import "./Card.css";
import { CardTypes } from "../@types/globals.d";
import PropTypes from "prop-types";

Card.propTypes = {
  data: PropTypes.shape(CardTypes).isRequired,
};

function Card({ data }) {
  const { img, title, description } = data;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
