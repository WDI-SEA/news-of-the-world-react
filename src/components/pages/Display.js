import React from "react"
import { useParams, Link } from "react-router-dom"

function Display({ articles, addFaves }) {
  const { id } = useParams()
  return (
    <div>
      <h1>{articles[id].title}</h1>
      <a href={articles[id].url}> 
      <img src={articles[id].urlToImage} alt='Article' width='500'/>
      </a>
      <h4>Written by: {articles[id].author}</h4>
      <p>{articles[id].description}</p>
      <button onClick={() => {addFaves(articles[id])}}> Add to favorites!</button>
      <br></br>
      <Link to={'/'}>Main Page</Link>
    </div>
  )
}

export default Display
