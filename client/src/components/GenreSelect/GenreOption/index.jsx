import React, { useState } from 'react'
import "./styles.scss";
import Button1 from '../../Button';

function GenreOption({ img, title, handleGenre }) {
  const [genreHover, setGenreHover] = useState(false);

  let genreImg = genreHover
  ? <div className="imgBox raiseIcon"><img src={img} alt={`${title} Image`} /></div>
  : <div className="imgBox lowerIcon"><img src={img} alt={`${title} Image`} /></div>

  return (
    <div className="genreOption">
        {genreImg}
        <Button1 text={title} onMouseEnter={() => setGenreHover(true)} onMouseOut={() => setGenreHover(false)} onClick={() => handleGenre(title.replace(' ', '').toLowerCase())} />
    </div>
  )
}

export default GenreOption