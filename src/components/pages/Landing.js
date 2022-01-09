import React from "react"
import { Link } from "react-router-dom"
import "../../App.css"

function Landing(props) {
  console.log("this is props", props)
  const articleList = props.articles.map((a, i) => {
    return (
      <li style={{margin:"7px 0", listStyle:"none"}} key={i} className="articleContainer">
        <h3 className="title">
          <Link to={`/display/${i}`}>{a.title}</Link>
        </h3>
      </li>
    )
  })

  return (
    <div>
      <div className="searchContainer">
        <label htmlFor="articleSearch">Search for an article: </label>
        <input
          id="articleSearch"
          type="text"
          value={props.search}
          onChange={props.handleChange}
          className="searchInput"
        />
      </div>
      <ul className="listContainer">{articleList}</ul>
    </div>
  )
}

export default Landing