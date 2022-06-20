import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

import Display from './pages/Display'
import Landing from './pages/Landing'

const API_KEY = process.env.REACT_APP_API_KEY

// https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}
// https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}
// https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${API_KEY}

function App() {
  const [news, setNews] = useState([])
  const [searchedNews, setSearchedNews] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const getTopNews = async () => {
      try {
        const res = await axios.get(url)

        console.log(res.data.articles)
        setNews(res.data.articles)
      } catch (err) {
        console.warn(err)
      }
    }

    getTopNews()
  }, [])

  const getSearchedNews = async search => {
    const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${API_KEY}`
    try {
      const res = await axios.get(url)
      setSearchedNews(res.data.articles)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Landing
                news={news}
                getSearchedNews={getSearchedNews}
                searchedNews={searchedNews}
              />
            }
          />
          <Route
            path='/display/:id'
            element={<Display news={news} searchedNews={searchedNews} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
