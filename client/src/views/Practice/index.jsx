import React from 'react'
import './style.scss';
import GenreSelect from '../../components/GenreSelect';
import { useLocation } from 'react-router-dom';

function Practice() {
  const { mode } = useLocation().state;

  return (
    <GenreSelect title={`Practice - ${mode}`} />
  )
}

export default Practice