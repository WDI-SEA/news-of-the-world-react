import { useState, useEffect } from 'react'
import React from "react";
import Articles from './Articles';
import Display from './Display'
import { Link } from 'react-router-dom';
const API_KEY = 'a8374b7d815a4b8db6a6112aebaca053'

function Landing() {
  const [data, setData] = useState([])
  const [search, setSearched] = useState('')
  const [faves, setFaves] = useState([])

  useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(rdata => {
      setData(rdata.articles)
      })
    }, [search])

    const handleChange = (e) => {
      // console.log('this is e', e.target)
      setSearched(e.target.value)
    }

    const submitButton = (e) => {
      e.preventDefault()
      setSearched(e.target[0].value)
    }

    const handleFave = (aa) => {
      if(faves.indexOf(aa)===-1) {
          setFaves([...faves, aa])
      }
  }

  const allFaves = faves.map((f, i) => {
    return (
        <li key={i}>
            <h3><Link to = {`/display/${i}`}>{f.title}</Link></h3>
        </li>
    )
})

    return (
      <div>
          <h1>Landing Page</h1>
          <form onSubmit={submitButton}>
          <label htmlFor="topic-search">Search a Topic: </label>
          <input 
          type="text" 
          id="topic-search" 
          value={search}
          onChange={handleChange}
          />
          </form>
          <Articles articleNames={data} handleClick={handleFave}/>
          <div id="faves">
          <h1>Favorited Articles: </h1>
          <Articles articleFaves={allFaves}/>
          <Display articleNames={data}/>
      </div>
      </div>
    )
}

export default Landing;