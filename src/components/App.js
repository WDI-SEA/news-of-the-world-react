import { Routes, Route } from 'react-router-dom';
import '../App.css';
import {useState, useEffect} from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';
import axios from 'axios';

function App() {


  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')
  const [faves, setFaves] = useState([])


  const url = `https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
  
  
  useEffect(()=>{
    if(input===''){
      console.log('nothing in input')
    } else {
      axios.get(url)
        //  .then(response=>console.log(response.data.articles))
         .then(response=>setArticles(response.data.articles))
    }
  },[search, faves])

  const handleChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    console.log('form was submitted')
    e.preventDefault()
    setSearch(input)
  }

  const addFave = (article) => {
    if(!faves.includes(article)){
      setFaves([...faves,article])
    }
  } 

  return (
    <div className="App">
      <main>
        <Routes>

          <Route 
          path="/" 
          element={
          <Landing 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          inputValue={input} 
          searchResults={articles}
          faves={faves}/>}
           />

          <Route 
          path="/display/:id"
          element={<Display articles={articles} addFave={addFave}/>} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
