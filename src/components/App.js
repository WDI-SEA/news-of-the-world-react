import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("")
  const [faves, setFaves] = useState([])

  useEffect(() =>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b07ba9ec80fe4533a5f50d04c79ecbbb')
    .then(response => response.json())
    .then(rdata=>{
      rdata = Object.values(rdata)
      setArticles(rdata[2])
    })
  }, [])


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getResults = () => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-12-06&sortBy=popularity&apiKey=8550bb526aa44284abdece25c663532e`)
    .then(response => response.json())
    .then(r2data=>{
      r2data = Object.values(r2data)
      console.log(r2data)
    })
  }

const getFilteredNews = () => {
  let search
}

  return (
    <div className="App">
      <label htmlFor="article-search">Search Article: </label>
      <input 
        type="text" 
        id="article-search" 
        value={search}
        onChange={handleChange}
        />
      <button type="submit" onSubmit={getResults}>Find Results</button>

      <main>
          <Routes>
            <Route path="/" element={<Landing articles={articles}/>} />
            <Route path="/article/:id" element={<Display articles={articles}/>} />
          </Routes>
      </main>
      
    </div>
  );
}

export default App;