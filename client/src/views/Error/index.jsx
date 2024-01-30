import React from 'react'
import "./style.scss";
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <div className='error'>
      <p>Your lost.</p>
      <Button text='Home' onClick={handleClick} />
    </div>

  )
}

export default Error