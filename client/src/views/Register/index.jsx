import React, { useState } from 'react'
import './style.scss';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/user/register', {
                username,
                password,
                password2
            });
            console.log(res);
        } catch (err) {
            
        }
    }

  return (
    <div className="register">
        <h1>Sign Up</h1>
        <form id='registerForm' onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder='Username' name='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password2" placeholder='Confirm Password' name='password' value={password2} onChange={e => setPassword2(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register