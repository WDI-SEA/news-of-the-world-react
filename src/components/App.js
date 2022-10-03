import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  //Set articles to be an empty array then useEffect to set articles to the array from API results
  const [ articles, setArticles ] = useState([])
  const [ faves, setFaves ] = useState([])
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

  const handleClick = (article) => {
    if(!faves.includes(article)){
      setFaves([...faves, article])
    }
  }

  return (
    <div className="App">
      <nav>
        <Link to='/'>Homepage</Link> { ' | ' }
        <Link to='/favorite'>Favorites</Link>
      </nav>
      <div>
        <label htmlFor='news-search'>Search an Article:</label>
        <input
        id='news-search'
        type='text'
        value={search}
        onChange={e=>setSearch(e.target.value)}></input>
      </div>
      <div>
        <h2>Recent News Articles</h2>
      </div>
      <main>
        <Routes>
          <Route path='/favorite' element={<Landing articles={faves}/>}></Route>
          <Route path="/" element={<Landing handleClick={handleClick}
          articles={getFilteredArticles()}/>} />
          <Route path="/article/:id" element={<Display 
          articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
