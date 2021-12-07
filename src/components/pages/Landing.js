import React from "react";
import { Link } from 'react-router-dom'


function Landing(props) {
    const displayArticles = props.articles.map((e, i) => {
        return (
        <>
        <Link to={`/display/${i}`}><li key={i}>{e.title}</li></Link>
        <button onClick={() => {props.onClick(e)}}>Add to Favorites</button>
        </>
        )
    })

    const displayFavorites = props.faves.map((e, i) => {
        return (<Link to={`/display/${i}`}><li key={i}>{e.title}</li></Link>)
    })

    return (
        <div>
        
        <h1>Landing Page</h1>
            {displayArticles}
        <h2>These are my Favorite Articles: </h2>
            {displayFavorites}
        </div>
    )
}

export default Landing;