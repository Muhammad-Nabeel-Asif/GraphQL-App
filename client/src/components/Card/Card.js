import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";
import images from "../../assets/images";
// import lion from "../../assets/image/lion2.jpg";
import star from "../../assets/svg/star.svg";

function Card({ animal }) {
  return (
    <Link to={`/product/${animal.slug}`} className="Card">
      <img className="main-img" src={images[animal.image]} alt={animal.title} />
      <h4>{animal.title}</h4>
      <div className="card-start">
        <img src={star} alt="star svg" />
        <img src={star} alt="star svg" />
        <img src={star} alt="star svg" />
        <img src={star} alt="star svg" />
        <img src={star} alt="star svg" />
      </div>
      <div className="card-price">
        <p>CAD $</p>
        <h4>{animal.price}</h4>
      </div>
      <div className="card-prime">
        <span>prime</span> FREE delivery by{" "}
        <span className="bold">Tuesday, Feb 16</span>
      </div>
    </Link>
  );
}

export default Card;
