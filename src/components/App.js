import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  let [data, setData] = useState({articles:[]})
  let [search, setSearch] = useState('')
  let [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=d05ca0f3400c4ad2b77ef7b0b09998f3`)
    .then(res => res.json())
    .then(responseData => {
      responseData = Object.values(responseData)
      //console.log('this is response data', responseData[2])
      //set data useState to articles found in data array element 2
      setData({articles: responseData[2]})
    })
  }, [])

  //account for input box to change via user typing
  const handleChange = (e) => {
    //set search useState to whatever user has typed in box (value)
    setSearch(e.target.value)
  }

  //filter articles by search term
  const getFilteredArticles = () => {
    //change user input to all lowercase
    let searchTerm = search.toLowerCase()
    return data.articles.filter(article => {
      //change data titles to all lowercase
      let lowercaseArticle = article.title.toLowerCase()
      //return data titles that include the search term (current search useState)
      return lowercaseArticle.includes(searchTerm)
    })
  }

  //account for button click via user click
  const handleClick = (article) => {
    //add article to existing faves array
    setFavorites([...favorites, article])
  }  

  return (
    <div className="App">
      <main>
        <Routes>
          {/* landing */}
          <Route path="/" element={<Landing articles={getFilteredArticles()} search={search} handleChange={handleChange} favorites={favorites} />} />
          {/* display id */}
          <Route path="/display/:id" element={<Display articles={data.articles} handleClick={handleClick} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;