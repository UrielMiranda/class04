import React from "react";
import "./Button.module.less";
const Button = (props) => {
    return <button className="primary__btn">{props.data}</button>;
};

export default Button;
