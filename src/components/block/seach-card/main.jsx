import "./main.css"
import Button from "../../UI/button/button.jsx";
import Card from "../../card/card";
import Header from "../../header/header";
import Logo from "../../logo/logo";
import { Ricks } from "../../../data/data.js";

function Main() {
  return (
    <div className="Main">
      <Button className="btn">Зарегатся</Button>
      <div className="hdf">
        <Logo className="Logo"/>
      <Header className="Header"/>
      </div>
      

      <div className="Ricks">
        {Ricks.map((Rick, index) => (
          <Card key={index} Rick={Rick}/>
        ))}
      </div>


    </div>
  );
}

export default Main;