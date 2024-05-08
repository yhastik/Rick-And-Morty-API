import "./input-form.css"


function Input(props) {
    return(
        <div className="input-group">
            <label htmlFor={props.name}>{props.labelName}</label>
            <input type={props.type} name={props.name}/>
        </div>
    )
}


export default Input