import React from 'react'
import Loading from '../../views/Loading'
import { useAuth } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ Component }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Component />;
  }

  return navigate('/');
}

export default ProtectedRoute