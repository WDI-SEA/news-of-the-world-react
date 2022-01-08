import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';
require('dotenv').config()

function App() {
  let [articles, setArticles] = useState({articles: []}) 
  let [search, setSearch] = useState('')
   useEffect(()=>{ //grabbing data from the api
     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=704b0327c1de487c804f47936b4e1d4d') //figure out env
     .then(response => response.json())
     .then(article=>{
       console.log("is this an article???", article.articles)
      setArticles({articles: articles})
     })
    }, [])
  
    const handleChange = (e) => {
      setSearch(e.target.value)
   }
  
   const getFilteredStories = () => {
     console.log('filtered stories:', getFilteredStories)
     let searchTerm = search.toLowerCase
     return articles.articles.filter((v)=> {
       let lowerCaseArt =  v.title.toLowerCase()
       return lowerCaseArt.includes(searchTerm)
     })
     
   }
   
  return (
    <div className="App">
      <main>
        <label htmlFor="news-search">Search Top Headlines: </label>
        <input 
        type='text'
        id='news-search'
        value={search}
        onChange={handleChange}
        />
        <Routes>
          <Route path="/" element={<Landing articles={articles} />} />
          <Route path="/articles/:id" element={<Display articles={articles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
