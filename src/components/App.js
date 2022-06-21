import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';
import '../styling/style.css';

function App() {
  const [data, setData] = useState({hits: []})
  const [search, setSearch] = useState('')
  const [toApi, setApi] = useState('technology')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    document.title = "News"
    fetch(`https://newsapi.org/v2/top-headlines?q=${toApi}&country=us&category=technology&apiKey=f7dd2e2ca8044018b5407cb1f5a4a5c4`)
    .then(response => response.json())
    .then(rdata => {
      setData({hits: rdata.articles})
    })
  }, [toApi])


const handleSubmit = (event) => {
  event.preventDefault()
  setApi(search)
}

  return (
    <BrowserRouter>
       <div className="app">
          <div className="headContainer">
              <h1>Breaking News</h1>
          </div>      
              <Routes>
                <Route path="/" element={<Landing  handleChange={handleChange} handleSubmit={handleSubmit} results={data.hits} />} />
                <Route path="/display/:id" element={<Display articles={data.hits} />} />
              </Routes>           
       </div>
    </BrowserRouter>
  )
}

export default App