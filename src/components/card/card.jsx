import React from "react";
import "./card.css";
import Info from "../person_info/person-info";

function Card({ Rick }) {
  return (
    <div className="Rick-card">
      <div className="img-Rick">
        <img src={Rick.image} alt={Rick.name} id={Rick.name}/>
      </div>
      <h2>{Rick.name}</h2>
      <div className="btn-cont">
        <button href={Info}>Подробнее</button>
      </div>
    </div>
  );
}

export default Card;