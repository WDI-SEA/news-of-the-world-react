import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';



function App() {



  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
