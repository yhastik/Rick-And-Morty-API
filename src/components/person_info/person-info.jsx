import React from "react";
import "./person-info.css";

function Info({ Rick }) {
  return (
    <div className="Info">

      <div className="img-Info">
        <img src={Rick.image} alt={Rick.name} id={Rick.name}/>
      </div>

      <div className="person-info">
        <h2>"Имя: {Rick.name}"</h2>
        <h2>"Статус: {Rick.status}"</h2>
        <h2>"Специальность: {Rick.species}"</h2>
        <h2>"Пол: {Rick.gender}"</h2>
        <h2>"Локация: {Rick.location}"</h2>
      </div>
    </div>
  );
}

export default Info;