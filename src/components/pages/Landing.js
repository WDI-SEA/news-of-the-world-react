import React from "react";
import { Link } from 'react-router-dom';
import ReadingList from '../partials/ReadingList.js'

function Landing(props) {
    const titleList = props.articles.map((a,i) => {
       return (
        <li ><Link to={`/article/:id`} onClick={() => props.handleClick(a)} id={i}>{a.title}</Link> <button onClick={() => props.addFave(a)} id={i}>+Read Later</button></li>
        // <li onClick={props.handleClick} id={i}>{a.title}</li>
       )
    })
    return (
        <>
            <h1>Landing Page</h1>
            <ReadingList faves={props.faves} handleClick={props.handleClick}/>
            <form onSubmit={props.searchNews}>
                <label htmlFor="news-search">Search the News </label>
                <input 
                type="text"
                onChange={props.handleChange}
                id="news-search"
                value={props.search}
                name="query"
                />
                <input type="submit" value="Search" />
            </form>
            <ul>
              {titleList}
            </ul>
        </>
    )
}

export default Landing;