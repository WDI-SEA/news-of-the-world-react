import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header';

const apiKey = process.env.REACT_APP_API_KEY

const App = () => {
  // use empty array for articles
  const [ articles, setArticles ] = useState([])
  // use empty string for search
  const [ search, setSearch ] = useState('')
  // use empty array for saved articles
  const [ saved, setSaved ] = useState([])

  const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  
  
  const handleChange = e => {
      setSearch(e.target.value)
  }

  // search submit & display search results
  const handleSubmit = e => {
      e.preventDefault()
      displaySearched()
  }

  // save article to favorites
  const handleSaveArticle = (article) => {
    // prevents from redundantly adding to favorites
      if (!saved.includes(article)){
        setSaved([...saved, article])
    }
  }

  // remove saved articles from favorites
  const handleRemoveSavedArticle = (article) => {
    // gets the saved articles
    let savedArticles = [...saved]
    // gets index of saved article to remove
    const articleIndex = savedArticles.indexOf(article)
    // splice article out of saved article array
    savedArticles.splice(articleIndex, 1)
    // save the removal of that article
    setSaved(savedArticles)
  }
  
  
  useEffect(() => {
    
    const displayAllArticles = async () => {
      try {

        const results = await axios.get(topHeadlinesUrl)

        const articles = results.data.articles
        // console.log('ALL articles::', articles)

        setArticles(articles)
      } catch (error) {
        console.log('display error ⎚', error)
      }
    }
    displayAllArticles()
  }, [topHeadlinesUrl])
  
  const displaySearched = async () => {
    const searchedArticlesUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`
    try {

      const results = await axios.get(searchedArticlesUrl)

      const articles = results.data.articles
      // console.log('SEARCHED::', articles)
      setArticles(articles)
    } catch (error) {
      console.log('search error ☠︎', error)
    }
  }


  return (
    <div className="App">
      <Header />
      <main>

        <Routes>

          <Route path="/" element={
          <Landing articles={articles} handleSubmit={handleSubmit} searchedArticles={displaySearched}
                   search={search} handleChange={handleChange} saved={saved} />} />

          <Route path="/article/:id" element={
          <Display articles={articles}
                 handleSaveArticle={handleSaveArticle} 
                 handleRemoveSavedArticle={handleRemoveSavedArticle} />} />

        </Routes>

      </main>
    </div>
  );
}


export default App