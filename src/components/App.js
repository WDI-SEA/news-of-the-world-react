import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  
  const [articles,  setArticles] = useState([])
  const [search, setSearch] = useState('PS5')
  const [faves, setFaves] = useState([])

  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`

  useEffect(() => {
    console.log("UseEffect is firing!")

    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData.articles)
        setArticles(jsonData.articles)
      })
  }, [url]) 

  const addFaves = (article) => {
    if (!faves.includes(article)) setFaves([...faves, article])
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles} search={search} setSearch={setSearch} faves={faves}/>} />
          <Route path="/articles/:id" element={<Display articles={articles} addFaves={addFaves}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
