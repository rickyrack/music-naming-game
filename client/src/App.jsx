import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar';
import Play from './views/Play';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App