import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar';
import Play from './views/Play';
import Error from './views/Error';
import HowTo from './views/HowTo';
import Casual from './views/Casual';
import Ranked from './views/Ranked';
import Practice from './views/Practice';
import Register from './views/Register';
import { AuthProvider } from './store/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/howto' element={<HowTo />} />
        <Route path='/ranked' element={<Ranked />} />
        <Route path='/casual' element={<Casual />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App