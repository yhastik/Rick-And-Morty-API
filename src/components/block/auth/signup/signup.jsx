import "../auth.css"
import Button from "../../../UI/button/button";
import Input from "../../../UI/input-form/input-form";
import Title from "../../../UI/title/title";
import SubTitle from "../../../UI/subTitle/subTitle";
import { Link } from "react-router-dom";

function Signup() {
    return(
        <div className="auth">
            <Title>Зарегистрироватся</Title>
            <Input name="email" type="email" labelName="Email"/>
            <Input name="password" type="password" labelName="Пароль"/>
            <Input name="resetPassword" type="password" labelName="Повторите пароль"/>
            <Button>Зарегестрироватся</Button>
            <Link to="/signin" class="menu_link"><SubTitle text = "У вас есть акаунта?" link=" Войти"/></Link>
        </div>
    )
}


export default Signup