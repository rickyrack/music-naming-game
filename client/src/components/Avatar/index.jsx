import React from 'react'
import "./styles.scss";

function Avatar({ size, seed }) {
    let src = "https://api.dicebear.com/7.x/bottts/svg?seed=Aneka";

    if (!size) size = "5rem";
    if (seed) src = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;

  return (
    <div className="avatarContainer" style={{ width: `${size}`, height: `${size}` }}>
        <img className="avatarImg" src={src} alt="Avatar"/>
    </div>
    
  )
}

export default Avatar