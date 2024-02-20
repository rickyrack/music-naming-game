import React from 'react'
import './styles.scss';
import GenreSelect from '../../components/GenreSelect';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import Cookies from 'js-cookie';

function PracticeOptions() {
  const navigate = useNavigate();
  const mode = useLocation().state?.mode || 'Normal';

  const handleGenre = (genre) => {
    const startMatch = async () => {
      try {
        const res = await api.post('/solo/start', {
          matchType: 'practice',
          settings: {
            mode: mode.toLowerCase(),
            genre: genre
          }
        });

        console.log(res.data);
        Cookies.set('matchId', `${res.data.matchId}`);

        navigate('/play');
      } catch (error) {
        console.log(`${error}`);
        navigate('/');
      }
    }

    startMatch();
  }

  return (
    <GenreSelect title={`Practice - ${mode}`} handleGenre={handleGenre} />
  )
}

export default PracticeOptions