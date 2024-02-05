import React from 'react'
import "./styles.scss";
import GenreOption from './GenreOption';
import RockImg from "../../assets/images/Genre Images/Rock.png";
import ClassicalImg from "../../assets/images/Genre Images/Classical.png";
import HipHopImg from "../../assets/images/Genre Images/Hip Hop.png";
import CountryImg from "../../assets/images/Genre Images/Country.png";
import EDMImg from "../../assets/images/Genre Images/EDM.png";
import AllImg from "../../assets/images/Genre Images/All.png";

import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function GenreSelect({ title }) {
  const navigate = useNavigate();

  const handleBack = () => navigate('/');

  return (
    <div className="genreSelect">
        <main>
          <h1>{title}</h1>
          <div className="genreOptions">
            <GenreOption img={RockImg} title="Rock" />
            <GenreOption img={ClassicalImg} title="Classical" />
            <GenreOption img={HipHopImg} title="Hip Hop" />
            <GenreOption img={CountryImg} title="Country" />
            <GenreOption img={EDMImg} title="EDM" />
            <GenreOption img={AllImg} title="All" />
          </div>
          <Button className='backButton' text='Back' onClick={handleBack} />
        </main>
    </div>
  )
}

export default GenreSelect