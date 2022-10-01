import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  const [search, setSearch] = useState('')
  const [newTerm, setTerm] = useState('sports')
  const [data, setData] = useState([])

  const handleChange = (e) => {
      setSearch(e.target.value)
  }
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${newTerm}&from=2022-09-30&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(jsonData => setData(jsonData.articles)) 
  }, [newTerm])
  const handleSubmit = (e) => {
    e.preventDefault()
    setTerm(search)
}
return (
  <BrowserRouter>
          {/* <nav>
            <link to='/'>Home</link>
          </nav> */}
           <Routes>
                  <Route path="/" 
                      element={<Landing handleChange={handleChange} 
                      handleSubmit={handleSubmit} 
                      results={data} />} />
                  <Route path="/details/:id" 
                    element={<Display 
                    articles={data} />} />
          </Routes> 
      
  </BrowserRouter>

  )
}
export default App;
require('dotenv').config()
