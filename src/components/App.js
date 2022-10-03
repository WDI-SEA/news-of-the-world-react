import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  // response from API
  const [apiResponse, setApiResponse] = useState([])
  // controlled input 
  const [inputValue, setInputValue] = useState('')
  // what to search on the api
  const [search, setSearch] = useState('programming')

  useEffect(() => {
    // https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=API_KEY
    console.log(process.env.REACT_APP_API_KEY)
    const getNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=22c7e6648f81407b881453d91c44ec70`
        const response = await axios.get(url)
        console.log(response.data)
        setApiResponse(response.data.articles)
      } catch (err) {
        console.warn(err)
      }
    }
    getNews()
  }, [search])

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
              />
            } 
          />
          <Route path="/display/:id" element={<Display apiResponse={apiResponse} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;