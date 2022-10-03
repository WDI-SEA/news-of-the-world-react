import React, { useState } from "react";
import { Link } from "react-router-dom";

function Landing(props) {

    const [inputSearch, setInputSearch] = useState('')

    const articleList = props.articles.map((article, i) => {


        return (
            <div key={`articlekey${i}`} className="article"> 
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <p><em>{article.author} </em></p>
                <Link to={`/display/${i}`}>Read More</Link>
            </div>
        )
    })

    return (
        <div className="landingDiv">
            <input onChange={e => setInputSearch(e.target.value)}  />
            <button type="submit" onClick={() => props.handleClick(inputSearch)}>Search</button>
            {articleList}
        </div>

    )
}

export default Landing;