import React from "react";
import { Link } from 'react-router-dom'
 
function Landing({ articles, faves, search, setSearch }) {
    // const { id } = useParams()
    const articlesList = articles.map((article, index) => {
        return (
            <li key={`articles-${index}`}>
                <Link to={`/articles/${index}`}>{article.title}</Link>
            </li>
        )
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // not working...
    // const getFilteredArticles = () => {
    //     let searchTerm = search.toLowerCase()
    //     return articles.articles.filter((article) => {
    //     let lowerCaseSearch = article.title.toLowerCase()
    //     return lowerCaseSearch.includes(searchTerm)
    //     })
    // }

    const showFaves = faves.map((fave, index) => {
        return (
            <li key={`faves-${index}`}>
                <Link to={`/articles/${index}`}>{fave.title}</Link> 
                {/* why is title not showing up */}
            </li>
        )
    })

    return (
        <>
            <h1>Landing Pageeeeeee</h1>
    
                <label htmlFor="search">Search:</label>
                <input 
                    id="search"
                    type="text"
                    value={search}
                    onChange={handleChange}
                />

            <h2>Favorited Articles</h2>
            {showFaves}

            <h2>Articles</h2>
            {articlesList}

            {/* <button onClick={() => {addToFaves(articles)}}>Add this article to favorites</button> */}
        </>
    )
}

export default Landing;