import "../auth.css"
import Button from "../../../UI/button/button";
import Input from "../../../UI/input-form/input-form";
import Title from "../../../UI/title/title";
import SubTitle from "../../../UI/subTitle/subTitle";
import { Link } from "react-router-dom";

function Signin() {
    return(
        <div className="auth">
            <Title>Вход</Title>
            <Input name="email" type="email" labelName="Email"/>
            <Input name="password" type="password" labelName="Пароль"/>
            <Button>Войти</Button>
            <Link to="/signup" class="menu_link"><SubTitle text = "У вас нет акаунта?" link=" Зарегистрироватся"/></Link>
            
        </div>
    )
}


export default Signin