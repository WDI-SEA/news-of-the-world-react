import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import axios from 'axios'


import Display from './pages/Display';
import Landing from './pages/Landing';


export default function App() {
  // response from API
  const [apiResonse, setApiResponse] = useState([])
  // control input
  const [inputValue, setInputValue] = useState('')
  // what to search on API
  const [search, setSearch] = useState('programming')


  // const handleChange = (e) => {
  //   setSearch(e.target.value)
  // }

  useEffect(() => {    
    const getNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-09-02&sortBy=publishedAt&apiKey=${process.env.ENV_API_KEY}`

        const response = await axios.get(url)
          console.log(response)
          console.log(response.data)
        setApiResponse(response.data.articles)
      } catch(err) {
        console.warn(err)
      }
    }
    getNews()
  }, [])


 

  return (
    <>
      <div>
        <h1>WorldMedia News</h1>
      </div>

      <Routes>
        <Route path="/" element={
            <Landing 
              apiResonse={apiResonse} 
              inputValue={inputValue} 
              setInputValue={setInputValue} setSearch={setSearch}
            />
          } 
        />
        <Route path="/display/:id" element={
            <Display 
              apiResonse={apiResonse}  
            /> } 
        />
      </Routes>  
    </>
  

  );
}