import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from "react"
import '../App.css';

import axios from "axios"

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './pages/Header';

function App() {

  const [articles,setArticles] = useState([])
  const [search, setSearch] = useState("")
  const [faves, setFaves] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFavoriteArticle = (article) => {
    if (!faves.includes(article)){
      setFaves([...faves, ...[article]])
    }
  }

  const getFilteredNews = () => {
    let searchTerm = search.toLowerCase()
    return articles.filter(v => {
      let lowerCaseName = v.title.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }

  useEffect(()=>{
    (async () => {
      try {
        const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
        const newsArticles = await axios.get(URL)
        // console.log(newsArticles.data.articles)
        setArticles(newsArticles.data.articles)
        // console.log("articles", articles)
      } catch (error) {
        console.warn(error)
      }
    })()
  },[])

  return (
    <div className="App">
      <main>
          <Header/>
          <Routes>

            <Route path="/" element={<Landing 
              articles = {getFilteredNews()}
              search = {search}
              faves = {faves}
              handleChange = {handleChange}
            />} />

            <Route path="/articles/:id" element={<Display
              articles = {articles}
              handleFavoriteArticle = {handleFavoriteArticle}
            />} />

            <Route path="/favorites/:id" element={<Display
              articles = {faves}
            />} />

          </Routes>
      </main>
    </div>
  );
}

export default App;
