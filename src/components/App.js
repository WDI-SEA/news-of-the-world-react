import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from "react"
import axios from "axios"

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
   // states
   const [headlines, setHeadlines] = useState([])

   const api_key= process.env.REACT_APP_API_KEY
   const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
 
  // get popoular headlines
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
   
  // maps headlines to display on front page
   const displayHeadlines= headlines.map((headline, i)=>{
    return(
      
      <li key= {`headline-${i}`} style={{listStyleType: "none"}}>
        title ={headline.title}
        {/* description ={headline.description} */}
      </li> 
    )
   })
  return (
    <div>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/display" element={<Display />} />
          </Routes>
        <div>
          <ul> {displayHeadlines}</ul>
        </div>
        </div>
      </div>
  );
}

export default App;
