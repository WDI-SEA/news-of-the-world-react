import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [apiResponse, setApiResponse] = useState([])
  //controlled input
  const[inputValue, setInputValue] = useState('')
  //what to search for on the API
  const [search, setSearch] = useState('programming')

  useEffect(() => {
  // https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=API_KEY
  console.log(process.env.REACT_APP_API_KEY)
    const getNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
      
        const response = await axios.get(url)
        console.log(response.data)
        setApiResponse(response.data.articles)
      } catch (err) {
        console.warn(err)
      }
  }
  getNews()
}, [])


  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <Landing 
                apiResponse={apiResponse} 
                inputValue={inputValue} 
                setInputValue={setInputValue}
                setSearch={setSearch} 
              />}
           />
          <Route path="/display/:id" element={<Display apiResponse={apiResponse} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
