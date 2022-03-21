import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';
import Article from "./pages/Article"

function App() {
  
  const [ articles, setArticles ] = useState({ hits: []})
  const [ toApi, setApi ] = useState("business")
  const [ search, setSearch ] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    document.title = "PIPBOY NEWS"
    fetch(`https://newsapi.org/v2/everything?q=${toApi}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(newsData => {
        setArticles({ hits: newsData.articles})
      })
  }, [toApi]) // empty dependency array
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setApi(search)
  }

  
  return (
      <div className="App">
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Landing />} 
            />

            <Route 
              path="/display" 
              element={<Display handleChange={handleChange} handleSubmit={handleSubmit} articles={articles.hits}/>} 
            />

            <Route 
              path="/display/:id"
              element={<Article  articles={articles.hits}/>}
            />
          </Routes>
        </main>
    </div>
  );
}

export default App;
