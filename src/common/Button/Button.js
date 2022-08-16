import React from 'react'
import "./Button.css";
const Button = (props) => {
    const { btnType, btnText, btnOnClick, customClass } = props;
  return (
      <div className={`${}`}>
          {btnText}
   </div>
  )
}

export default Button