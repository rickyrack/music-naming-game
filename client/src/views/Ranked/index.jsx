import React from 'react'
import "./style.scss";
import GenreOption from './GenreOption';
import RockImg from "../../assets/images/Genre Images/Rock.png";
import ClassicalImg from "../../assets/images/Genre Images/Classical.png";
import HipHopImg from "../../assets/images/Genre Images/Hip Hop.png";
import CountryImg from "../../assets/images/Genre Images/Country.png";
import JazzImg from "../../assets/images/Genre Images/Jazz.png";
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Ranked() {
  const navigate = useNavigate();

  const handleBack = () => navigate('/');

  return (
    <div className="ranked">
        <main>
          <h1>Ranked</h1>
          <div className="genreOptions">
            <GenreOption img={RockImg} title="Rock" />
            <GenreOption img={ClassicalImg} title="Classical" />
            <GenreOption img={HipHopImg} title="Hip Hop" />
            <GenreOption img={CountryImg} title="Country" />
            <GenreOption img={JazzImg} title="Jazz" />
          </div>
          <Button className='backButton' text='Back' onClick={handleBack} />
        </main>
    </div>
  )
}

export default Ranked