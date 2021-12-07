import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  let [articles, setArticles] = useState([])
  let [search, setSearch] = useState('')
  let [faves, setFaves] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=548af3c2e30d4fea8cca764990c791a0')
    .then(response => response.json())
    .then(apiData => {
      console.log('This is my apiData', apiData)
      apiData = Object.values(apiData)
      setArticles(apiData[2])
    })
    .catch(error => {
      console.log('Getting an error in useEffect:', error)
    })
  }, [])

  //Handle Change and Get Results are for Search Functionality
  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log('This is the value from input field: ', e)
    console.log('this is set search', search)
  }

  const getResults = (e) => {
    e.preventDefault()
    console.log('Find results button was clicked')
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-12-06&sortBy=popularity&apiKey=548af3c2e30d4fea8cca764990c791a0`)
    .then(response => response.json())
    .then(r2data => {
      r2data = Object.values(r2data)
      console.log('This is my Search Button result: ', r2data)
      setArticles(r2data[2])
    })
    .catch(error => {
      console.log('error in getResults', error)
    })
  }

  //Helper Methods to get Favorites List

  return (
    <div className="App">
      <div id="articles-search">
        <form onSubmit={getResults}>
          <label htmlFor="articles-search"/>
          <input 
          type="text" 
          id="articles-search"
          value={search}
          onChange={handleChange}
          />
          <button >Find Articles</button>
        </form>
      </div>
      
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles}/>}/>
          <Route path="/display/:id" element={<Display articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
