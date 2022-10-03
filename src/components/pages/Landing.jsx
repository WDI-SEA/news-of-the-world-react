import React from "react";
import { Link } from 'react-router-dom'

function Landing(props) {
    const articles = props.apiResponse.map((article, i) => {
        return (
            <div key={`article-${i}`}>
                <Link to={`/display/${i}`}>
                    <h3>{article.title}</h3>

                    <p>{article.description}</p>

                    <h4>by: {article.author}</h4>
                </Link>

                <div>
                    <button onClick={() => props.setReadLater([...props.readLater, { id: i, article }])}>Read Later!</button>
                </div>
            </div>
        )
    })

    const readLaters = props.readLater.map(readLater => {
        return (
            <li key={`readLater${readLater.id}`}>
                <Link to={`/display/${readLater.id}`}>{readLater.article.title}</Link>
            </li>
        )
    })

    const handleSubmit = e => {
        e.preventDefault()
        props.setSearch(props.inputValue)
    }

    return (
        <div>
            <h1>News Search</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor='input'>Search:</label>
                <input
                    type='text'
                    value={props.inputValue}
                    onChange={(e) => props.setInputValue(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            <h2>Read Later:</h2>

            <ul>
                {readLaters}
            </ul>

            <h2>Articles:</h2>

            {articles}
        </div>
    )
}

export default Landing;