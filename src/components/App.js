import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  //Set articles to be an empty array then useEffect to set articles to the array from API results
  const [ articles, setArticles ] = useState([])
  const [ current, setCurrent ] = useState({})
  const [ search, setSearch ] = useState('')
  useEffect(()=> {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY
    // console.log(API_KEY)
    const popularArticlesUrl = `https://newsapi.org/v2/everything?q=Apple&from=2022-10-01&sortBy=recent&apiKey=${API_KEY}`;
    async function fetchNewsAPI(){
      try{
        console.log('useEffect is firing!');
        const response = await fetch(popularArticlesUrl)
        const responseData = await response.json()
        // console.log(responseData.articles)
        setArticles(responseData.articles)
        console.log(articles)

      }catch(err){
        console.log(err)
      }
    }
    fetchNewsAPI(); // invoke function
  }, [])

  const getFilteredArticles = (e)=> {
    let searchField = search.toLowerCase()
    return articles.filter(article => {
      let lowerCaseTitle = article.title.toLowerCase()
      return lowerCaseTitle.includes(searchField)
    })
  }

  return (
    <div className="App">
      <nav>
        <Link to='/'>Homepage</Link>
      </nav>
      <div>
        <label htmlFor='news-search'>Search for an article:</label>
        <input
        id='news-search'
        type='text'
        value={search}
        onChange={e=>setSearch(e.target.value)}></input>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={getFilteredArticles()}/>} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
