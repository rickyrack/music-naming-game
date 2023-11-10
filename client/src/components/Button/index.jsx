import React from 'react'
import "./style.scss";

function Button({ className, text, onClick, onMouseEnter, onMouseOut }) {
  return (
    <button className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} >
        {text}
    </button>
  )
}

export default Button