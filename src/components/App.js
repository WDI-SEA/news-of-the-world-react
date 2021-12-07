// require('dotenv').config()
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  // declare and initialize states.  Data, Search, Faves
  let [data, setData] = useState({articles:[]})
  let [search, setSearch] = useState('')
  let [faves, setFaves] = useState([])
  // Fetch API data.  Turn into Object and select which array element the data is in
  // Ship data to Data state object with array.  Key: articles, Value: rdata[2]
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=e2a9a281d472447dbe0ceb2733414c91`)
    .then(res => res.json())
    .then(rdata => {
      rdata = Object.values(rdata)
      setData({articles: rdata[2]})
    })
  }, [])
  // Handler for changes in search box.  Adds value to Search string state
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  // Get searched data to display.  Pass filteredArticles to Landing Page
  const getFilteredArticles = () => {
    let keyword = search.toLowerCase()
    return data.articles.filter(a => {
      let lowerCaseArticle = a.title.toLowerCase()
      return lowerCaseArticle.includes(keyword)
    })
  }
  // Click Handler for adding articles to favorites.  Spread operator to add to array of Faves state
  const handleClick = (article) => {
    setFaves([...faves, article])
  }  
  // Pass handlers and states to routes.  Change url patter to include the ID of the article
  // Send getFilteredArticles to Landing component.  Add search and handleChange handlers
  // Attach handleClick handler to Display component /display/:id
  // Data state - articles Keys and Values shipped to /display
  return (
    <div className="App">
      <main>
        <Routes>
          {/* Anything hitting this route will pass the element/handlers */}
          <Route path="/" element={<Landing articles={getFilteredArticles()} search={search} handleChange={handleChange} faves={faves} />} />
          {/* Any article that is clicked on will route to this and pass these states */}
          <Route path="/display/:id" element={<Display articles={data.articles} handleClick={handleClick} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App