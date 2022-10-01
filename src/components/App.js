import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from "react"
import axios from "axios"

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
   // states
   const [headlines, setHeadlines] = useState([])
   const [search, setSearch] = useState(" ")

   const api_key= process.env.REACT_APP_API_KEY
   const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
  //  const searchUrl =`https://newsapi.org/v2/everything?q=${userQuery}&apiKey=${App}`
  //  const userQuery= " "

   useEffect(()=>{
    async function getHeadlines(){
      try{
          const response = await axios.get(url)
          setHeadlines(response.data.articles)

      }catch(error){
          console.log(error)
      }
    }
    getHeadlines()
  }, [])
   
   const displayHeadlines= headlines.map((headline, i)=>{
    return(
      
      <Landing
      key= {`headline-${i}`}
      title ={headline.title}
      description ={headline.description}
      />
      
    )
   })
  return (
    <div>
        <form>
        <input type ="text"
            name="search"
            // onChange={handleChange}
            // value={search} 
            />

        <button type="submit">Search</button>
        </form>
          {headlines}
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/display" element={<Display />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
