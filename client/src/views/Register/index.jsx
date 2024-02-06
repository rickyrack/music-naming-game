import React, { useEffect, useState } from 'react'
import './styles.scss';
import Button1 from '../../components/Button';
import { useAuth } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

function Register() {
    const navigate = useNavigate();
    const { register, user } = useAuth();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
      if (user) navigate('/');

    }, [])
    

    const checkRegisterData = async () => {
        try {
            const res = await api.get('/user/register', {
                username,
                email
            });
            return res;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
            setErrorMsg('Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            console.log('Password too short');
            setErrorMsg('Password must be atleast 6 characters.');
            return;
        }
        const validData = await checkRegisterData();
        if (validData === "Username Exists") {
            setErrorMsg("Username already exists.");
            return;
        }
        if (validData === "Email Exists") {
            setErrorMsg("Email already registered.");
            return;
        }
        await register(email, password, username);
    }

  return (
    <div className="register">
        <h1>Sign Up</h1>
        <form id='registerForm' onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder='Email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder='Username' name='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' name='password' autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirm Password' name='password' autoComplete='off' value={password2} onChange={e => setPassword2(e.target.value)} />
            <Button1 type='submit' text='Submit' />
        </form>
        <p className="errorMsg">{errorMsg}</p>
    </div>
  )
}

export default Register