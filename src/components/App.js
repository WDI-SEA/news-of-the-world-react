import { Routes, Route } from 'react-router-dom';
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import dotenv from 'dotenv';
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';

// const allNews = `https://newsapi.org/v2/everything?q=keyword&apiKey=process.env.REACT_APP_X-Api-Key`

export default function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" 
          element={<Landing />} 
          />
          <Route 
          path="/display" 
          element={<Display />} 
          />
        </Routes>
      </main>
    </div>
  );
}

