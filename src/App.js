import './App.css'
import Layout from './components/layout/Layout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Display from './components/pages/Display'
import Landing from './components/pages/Landing'
import axios from 'axios'
import Favorites from './components/pages/Favorites'
// import newsSample from './data/newsSample'
import Navigation from './components/layout/Navigation'


export default function App () {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [pinnedNews, setPinnedNews] = useState([])
  
  let endPoint = `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_NOTW_API_KEY}`

  if(search==='') {
    endPoint = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${process.env.REACT_APP_NOTW_API_KEY}`
  }
  
 useEffect(()=> {
  (async () => {
    const res = await axios.get(endPoint)
    setArticles(res.data.articles)
    // console.log(articles[1].source.name)
  })()
 },[])   

 function searchNews() {
  (async () => {
    const res = await axios.get(endPoint)
    setArticles(res.data.articles)
    // console.log(articles[0].description)
  })()
 }

 // useEffect(()=> {
//   setArticles(newsSample.articles)
// },[])

 const pinNews = (article) => {
  setPinnedNews([...pinnedNews, article])
}
 
  return (
    <>
      
      <BrowserRouter>
      <Navigation  search={search} setSearch={setSearch} searchNews={searchNews}/>
    
        <Layout>
          <Routes>
            <Route exact path="/" element={<Landing articles={articles} />} />
            <Route path="/articles/:id" element={<Display articles={articles} pinArticle={pinNews}/>} />
            <Route path="/favorites" element={<Favorites pinnedArticles={pinnedNews} />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}