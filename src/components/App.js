import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';


import Display from './pages/Display';
import Landing from './pages/Landing';


export default function App() {

  // search input
  const [search, setSearch] = useState('')
  // api data
  const [toApi, setApi] = useState('news')
  // set data
  const [data, setData] = useState({targetSearch: []})
  // favorited articles
  const [faves, setFaves] = useState([])

  const API_KEY = process.env.ENV_API_KEY

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    document.title = "News Search App"
    const url = `https://newsapi.org/v2/everything?q=${toApi}&from=2022-09-01&sortBy=publishedAt&apiKey=${API_KEY}`
      fetch(url)
        .then(response => response.json())
        .then(rData => {
            setData({targetSearch: rData.articles})
            console.log(rData)
        })
      }, [toApi])  



  const handleSubmit = (e) => {
    e.preventDefault()
    setApi(search)
  }
 

  return (

            <>
              <div>
                <h1>WorldMedia News</h1>
              </div>

              <Routes>
                <Route path="/" element={<Landing handleChange={handleChange} handleSubmit={handleSubmit} results={data.targetSearch} />} />
                <Route path="/details/:id" element={<Display articles={data.targetSearch} />} />
              </Routes>  
            </>
  

  );
}