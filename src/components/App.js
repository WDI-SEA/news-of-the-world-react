import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    document.title = "News Search App"
    const url = `https://newsapi.org/v2/everything?q=${toApi}&from=2022-09-01&sortBy=publishedAt&apiKey=22c7e6648f81407b881453d91c44ec70`
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
    <div className="App">
      <main>
          <BrowserRouter>
            <div>
              <h1>WorldMedia News</h1>
            </div>
            <Routes>
              <Route path="/" element={<Landing handleChange={handleChange} handleSubmit={handleSubmit} results={data.targetSearch} />} />
              <Route path="/details/:id" element={<Display articles={data.targetSearch} />} />
            </Routes>
          </BrowserRouter>

      </main>
    </div>
  );
}