import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header';

const apiKey = process.env.REACT_APP_API_KEY

export default function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [saved, setSaved] = useState([])

  const headlineArticlesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  // const searchedArticlesUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`

  const handleChange = e => {
    setSearch(e.target.value)
  }
  const handleSaveArticle = (article) => {
    if (!saved.includes(article)){
      setSaved([...saved, article])
    }
  }
  const handleRemoveSavedArticle = (article) => {
    let savedArticles = [...saved]
    const articleIndex = savedArticles.indexOf(article)
    savedArticles.splice(articleIndex, 1)
    setSaved(savedArticles)
  }

  const getFilteredArticles = (e) => {
    const searchTerm = search.toLowerCase()
    return articles.filter(article => {
      const lowerCaseTitle= article.title.toLowerCase()
      return lowerCaseTitle.includes(searchTerm)
    })
  }
  // const handleSubmit = e => {
  //     e.preventDefault()
  //     displaySearchedArticles()
  // }
  useEffect(() => {
    const displayAllArticles = async () => {
      try {
        const results = await axios.get(headlineArticlesUrl)
        // console.log('this is results',results)
        const articles = results.data.articles
        // console.log('this is articles',articles)
        setArticles(articles)
      } catch (error) {
        console.log(error)
      }
    }
    displayAllArticles()
  }, [headlineArticlesUrl])

  // const displaySearchedArticles = async () => {
  //   try {
  //     const results = await axios.get(searchedArticlesUrl)
  //     // console.log('this is results',results)
  //     const articles = results.data.articles
  //     // console.log('this is articles',articles)
  //     setArticles(articles)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
          <Landing  
          articles={getFilteredArticles()}
          // searchedArticles={displaySearchedArticles()}
          search={search}
          handleChange={handleChange}
          saved={saved}
          />
          } />
          <Route path="/article/:id" 
          element={
          <Display 
          articles={articles}
          handleSaveArticle={handleSaveArticle}
          handleRemoveSavedArticle={handleRemoveSavedArticle}
          />
          } />
        </Routes>
      </main>
    </div>
  );
}

