import React from 'react'
import './styles.scss';
import GenreSelect from '../../components/GenreSelect';
import { useLocation, useNavigate } from 'react-router-dom';

function Practice() {
  const navigate = useNavigate();
  const { mode } = useLocation().state;

  const handleGenre = (genre) => {
    // api call here with check
    navigate('/play', { state: { online: false, mode: mode, genre: genre } });
  }

  return (
    <GenreSelect title={`Practice - ${mode}`} handleGenre={handleGenre} />
  )
}

export default Practice