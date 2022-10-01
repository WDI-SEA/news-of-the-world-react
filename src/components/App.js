import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header';


function App() {
  const [articleList, setArticleList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [savedArticles, setSavedArticles] = useState([])

  const handleInputChange = e => {
    setSearchValue(e.target.value)
  }

  const handleSearch = e => {
    e.preventDefault()
    async function fetchArticles() {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchValue}&language=en&pageSize=30&apiKey=${apiKey}`)
        setArticleList(response.data.articles)
      } catch (error) {
        console.warn(error)
      }
    }
    fetchArticles()
  }

  const handleSaveArticle = article => {
    const newList = [...savedArticles]
    const articleIdx = newList.indexOf(article)
    if(articleIdx < 0) {
      newList.push(article)
    }
    setSavedArticles(newList)
  }

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Landing
              articleList={articleList}
              savedArticleList={savedArticles}
              setArticleList={setArticleList}
              saveArticle={handleSaveArticle}
            />}
          />

          <Route
            path="/articles/:id"
            element={<Display
              articleList={articleList}
            />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
