import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Favorite from './pages/Favorite'

function App() {

  const [data,setData]  = useState([])

  const [search,setSearch] = useState([])
  const [favorite,setFavourite] = useState([])

  
  console.log(search)

  useEffect(()=>{
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-09-02&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    axios.get(url)
    .then((response)=>{
      console.log(response)
      setData(response.data.articles)
      setSearch(response.data.articles.map(news=>{
        console.log(news)
        return news.title
    }))
       })
    .catch((err)=>{
      console.log(err)
    })
    
  },[])

  const handleChange= (e)=>{

    const results = data.map(result=>{
      if(result.title.toLowerCase().includes(`${e.target.value.toLowerCase()}`)){
        return result.title
      }
    })
    setSearch(results) 
  }
  
const addToFavorite = (id)=>{
  console.log(id)
  const newFav=[...favorite]
  newFav.push(data[id].title)

  setFavourite(newFav)
  console.log(newFav)
  console.log(favorite)
}

  console.log(data)
  return (
    <div className="App">
      <main>
        <Link to="/all"> <p> All Article </p> </Link>
        <Link to="/favorite"> Favourite</Link>
        <Routes>
          <Route path="/all" element={<Landing data={search} handleChange={handleChange} favorite={addToFavorite} />} />
          <Route path="/display/:id" element={<Display data={data}/>} />
          <Route path="/favorite" element={<Favorite data={favorite}/>} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
