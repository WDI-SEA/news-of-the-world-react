import React from "react";
import { Link } from 'react-router-dom'


function Landing(props) {
    const displayArticles = props.articles.map((e, i) => {
        return <Link to={`/display/${i}`}><li key={i}>{e.title}</li></Link>
    })

    return (
        <div>
        
        <h1>Landing Page</h1>
            {displayArticles}
        </div>
    )
}

export default Landing;