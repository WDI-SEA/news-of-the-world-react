import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';


import axios from 'axios'
import { useEffect, useState } from 'react';


export default function App() {

  
  // let [articles, setArticles]  = useState([])
  // response from API
  const [apiResponse, setApiResponse] = useState([])
  // save to read later
  const [readLater, setReadLater] = useState([])
  // controlled input
  const [inputValue, setInputValue] = useState('')
  // what to search in the api
  const [search, setSearch] = useState('programming')

  const api_key = process.env.REACT_APP_NEWS_API_KEY
  // console.log(api_key)

  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsUrl = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${api_key}`
        const response = await axios.get(newsUrl)
        console.log(response.data)
        setApiResponse(response.data.articles)
      } catch(err) {
        console.warn(err)
      }
    }
    getNews()
  }, [search])

  // useEffect(() => {
  //   console.log('useEffect is firing!')
  //   axios.get(url)
  //     .then(response => {
  //       // console.log(response.data)
  //       console.log(response.data.articles)
  //       setArticles(response.data.articles)
  //     })
  //     .catch(console.warn)
  // }, []) // empty dependency array (will make the useEffect run only on the first render!)



  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={
            <Landing
              apiResponse={apiResponse}
              inputValue={inputValue}
              setInputValue={setInputValue}
              setSearch={setSearch}
              readLater={readLater}
              setReadLater={setReadLater} />} />
          <Route path="/display/:id" element={<Display apiResponse={apiResponse}/>} />
         
        </Routes>
      </main>
    </div>
  );
}


