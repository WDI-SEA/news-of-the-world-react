import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    console.log("UseEffect is firing!")

    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData.articles)
      })
  }, []) // Run one time

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
