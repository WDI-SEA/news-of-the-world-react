import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [newsInfo, setNewsInfo] = useState([])

  const [search, setSearch] = useState('')

  // const [newsUrl, setNewsUrl] = useState('')

  useEffect(() => {
    const api_key = process.env.REACT_APP_NEWS_API_KEY
    const newsUrl = (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
    console.log("UseEffect is firing!")
    // const req = new Request(newsUrl);
    fetch(newsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData.articles)
      setNewsInfo(jsonData.articles)
    })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    console.log('submit button pressed')
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <Landing 
                newsInfo={newsInfo} 
                search={search} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
              />
            }
          />
          <Route path="/display" element={<Display newsInfo={newsInfo} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
