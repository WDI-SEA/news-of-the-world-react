import React, { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Layout from './Layout/Layout';

function App() {

  const [headlines, setHeadlines] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const headlinesURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    fetch(headlinesURL)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData.articles)
        setHeadlines(jsonData.articles)
      })
      .catch(err => console.log(err))
  },[])

  const getSearch = e => {
    let searchTerm = search.toLowerCase()
    return headlines.filter(article => {
      let lowercaseArticle = article.description.toLowerCase()
      return lowercaseArticle.includes(searchTerm)
    })
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <Layout value={search} handleChange={handleChange}>
        <Routes>
          <Route path="/" element={<Landing  headlines={getSearch()} />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
