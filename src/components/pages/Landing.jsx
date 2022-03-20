import React from "react";
import {Link} from "react-router-dom"


function Landing( {articles, search, setSearch} ) {
    const allArticles = articles.map((article, idx) => {
        return(
            <section key={idx}>
                <Link to={`/article/${idx}`}><h4>{article.title}</h4></Link>
                <small>by: {article.author}</small>
            </section>
        )
    })

    const submitForm = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <h1>Landing Page</h1>
            <form onSubmit={submitForm}>
                <input type="text" value={search} id="search" onChange={(e) => {setSearch(e.target.value)}} />
            </form>
            <div>
                {allArticles}
            </div>
        </>
    )
}

export default Landing;