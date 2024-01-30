import React, { useState } from 'react'
import './style.scss';
import { api } from '../../services/api';
import Button1 from '../../components/Button';
import { useAuth } from '../../store/AuthContext';

function Register() {
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('passwords do not match');
            return;
        }
        try {
            const registerData = await register(email, password);
            const res = await api.post('/user/register', {
                email,
                username,
                password,
                password2
            });
            console.log(res);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

  return (
    <div className="register">
        <h1>Sign Up</h1>
        <form id='registerForm' onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder='Email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder='Username' name='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirm Password' name='password' value={password2} onChange={e => setPassword2(e.target.value)} />
            <Button1 type='submit' text='Submit' />
        </form>
    </div>
  )
}

export default Register