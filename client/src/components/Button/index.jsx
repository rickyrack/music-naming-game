import React from 'react'
import "./style.scss";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
        {text}
    </button>
  )
}

export default Button