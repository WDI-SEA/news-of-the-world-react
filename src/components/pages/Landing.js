import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing(props) {
    let [search, setSearch] = useState('')

    const articles = props.articles.filter(article => article.title.toLowerCase().includes(search)).map((article, i) => {
        return <>
            <h3 key={`${i}-${article.title}`}>
                <Link to={`/display/${i}`}>
                    {article.title}
                    </Link>
                <button
                    onClick={() => props.handleFavArticle(article)}
                >
                    Favorite
                </button>
            </h3>
        </>
    })

    return (
        <>
        <div>
                <label htmlFor="article-search">Search the News:</label>
                <input
                    id="article-search"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        <h2>Popular:</h2>
        {articles}
        </>
    )
}