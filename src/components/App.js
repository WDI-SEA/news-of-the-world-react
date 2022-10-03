import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  //Set articles to be an empty array then useEffect to set articles to the array from API results
  const [ articles, setArticles ] = useState([])
  const [ faves, setFaves ] = useState([])
  const [ inputValue, setInputValue ] = useState('')
  const [ search, setSearch ] = useState('apple')

  useEffect(()=> {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY
    // console.log(API_KEY)
    const articlesUrl = `https://newsapi.org/v2/everything?q=${search}&from=2022-10-01&sortBy=publishedAt&apiKey=${API_KEY}`;

    //AXIOS
    const getNews = async () => {
      try{
        const response = await axios.get(articlesUrl)
        console.log(response.data)
        setArticles(response.data.articles)
      }catch(err){
        console.warn(err)
      }
    }
    getNews()
    //FETCH
    // async function fetchNewsAPI(){
    //   try{
    //     console.log('useEffect is firing!');
    //     const response = await fetch(popularArticlesUrl)
    //     const responseData = await response.json()
    //     console.log(responseData.articles)
    //     setArticles(responseData.articles)
    //     console.log(articles)

    //   }catch(err){
    //     console.log(err)
    //   }
    // }
    // fetchNewsAPI(); // invoke function
  }, [search]) // empty array argument to fire useEffect only once when DOM loads.

  const getFilteredArticles = (e)=> {
    let searchField = search.toLowerCase()
    return articles.filter(article => {
      let lowerCaseTitle = article.title.toLowerCase()
      return lowerCaseTitle.includes(searchField)
    })
  }

  const handleClick = (article) => {
      setFaves([...faves, article])
  }

  return (
    <div className="App">
      <nav>
        <Link to='/'>Homepage</Link>
      </nav>
      {/* <div>
        <label htmlFor='news-search'>Search articles by input:</label>
        <input
        id='news-search'
        type='text'
        value={search}
        onSubmit={e=>setSearch(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </div> */}
      <div>
        <h2>News Articles</h2>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Landing handleClick={handleClick}
          setSearch={setSearch}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setFaves={setFaves}
          faves={faves}
          articles={articles}/>} />
          <Route path="/article/:id" element={<Display 
          articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
