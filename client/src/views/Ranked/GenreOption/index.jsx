import React, { useState } from 'react'
import "./style.scss";
import Button from '../../../components/Button';

function GenreOption({ img, title }) {
  const [genreHover, setGenreHover] = useState(false);
  
  let genreImg = genreHover
  ? <div className="imgBox raiseIcon"><img src={img} alt={`${title} Image`} /></div>
  : <div className="imgBox lowerIcon"><img src={img} alt={`${title} Image`} /></div>

  return (
    <div className="genreOption">
        {genreImg}
        <Button text={title} onMouseEnter={() => setGenreHover(true)} onMouseOut={() => setGenreHover(false)} />
    </div>
  )
}

export default GenreOption