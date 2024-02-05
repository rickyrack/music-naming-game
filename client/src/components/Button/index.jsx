import React from 'react'
import "./styles.scss";

function Button1({ className, text, onClick, onMouseEnter, onMouseOut }) {
  return (
    <button className={`${className} Button1Class`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} >
        {text}
    </button>
  )
}

export default Button1