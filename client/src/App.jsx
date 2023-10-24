import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar';
import Play from './views/Play';
import Error from './views/Error';
import HowTo from './views/HowTo';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/howto' element={<HowTo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App