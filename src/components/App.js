import React, { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Layout from './Layout/Layout';

function App() {

  const [headlines, setHeadlines] = useState([])

  useEffect(() => {
    const headlinesURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    fetch(headlinesURL)
      .then(response => response.json())
      .then(jsonData => {
        setHeadlines(jsonData.articles)
      })
  },[])

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Landing  headlines={headlines}/>} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
