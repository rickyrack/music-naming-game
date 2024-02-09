import React, { useEffect } from 'react'
import Loading from '../../views/Loading'
import { useAuth } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ Component }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/register');

  }, [])

  if (user) {
    return <Component />;
  }
}

export default ProtectedRoute