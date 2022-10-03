import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import axios from 'axios';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App(
  const [apiResponse, setApiResponse]=useState([])
  const [inputValue, setInputValue]=useState('')
  const [search, setSearch]=useState('programming')
  const [readLater, setReadLater]=useState([])
  console.log(process.env.REACT_APP_API_KEY)
  useEffect(()=>{
    console.log(process.env.REACT_APP_API_KEY)
    //https://newsapi.org/v2/everything?q=tesla&from=2022-09-03&sortBy=publishedAt&apiKey=86dd72e0766741dd85178462247aeb55
    const getNews = async ()=>{
      try{
        const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
        const response = await axios.get(url)
        setApiResponse(response.data.articles)
      }catch(err){
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
        const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
        const response = await axios.get(url)
        console.log(response.data)
        setApiResponse(response.data.articles)
         getNews()
      } catch (err) {
        console.warn(err)
      }
  },[search])


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
                readLater={readLater}
                setReadLater={setReadLater}
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
