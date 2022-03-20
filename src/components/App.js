import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [newsInfo, setNewsInfo] = useState([])

  const [search, setSearch] = useState('')

  // const [newsUrl, setNewsUrl] = useState('')
  const [url, setUrl] = useState('top-headlines?country=us')

  const [faves, setFaves] = useState([])

  // https://newsapi.org/v2/everything?q=${url}&apiKey=${api_key}`

  useEffect(() => {
    const api_key = process.env.REACT_APP_NEWS_API_KEY
  
    const newsUrl = (`https://newsapi.org/v2/${url}&apiKey=${api_key}`)
    console.log("UseEffect is firing!")
    // const req = new Request(newsUrl);
    fetch(newsUrl)
    .then(response => response.json())
    .then(jsonData => {
      // console.log(jsonData.articles)
      setNewsInfo(jsonData.articles)
    })
  }, [url])

  const handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault()
    console.log('submit button pressed')
    setUrl(`everything?q=${search}`)
    console.log(search, url)
  }

  const handleFaves = (article) => {
    console.log(article)
    console.log('favorite button pressed')
    if(!faves.includes(article)) {
      setFaves([...faves, article])
    }
    console.log(faves)
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
                setSearch={setSearch}
                // handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleFaves={handleFaves}
                // setFaves={setFaves}
                faves={faves}
              />
            }
          />
          <Route path="/display/:id" element={<Display newsInfo={newsInfo} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
