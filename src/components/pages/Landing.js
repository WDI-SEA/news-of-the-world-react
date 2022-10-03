import React from "react";
import {Link} from 'react-router-dom'

function Landing(props) {
    const articles = props.apiResponse.map((article, i) => {
            return (
                <div
                    key={`article${i}`}>
                    <Link to={`/display/${i}`}>
                        <h2>{article.title}</h2>

                        <p>{article.description}</p>

                        <h3>by: {article.author}</h3>
                    </Link>
                </div>
        )}
    )

    const handleSubmit = e => {
        e.preventDefault()
        props.setSearch(props.inputValue)
    }          

    return (
      <>
        <h1>News Search</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor='input'>Search:</label>
            <input
                type='text'
                value={props.inputValue}
                onChange={e => props.setInputValue(e.target.value)}
        />
            <button type='submit'>Search</button>
        </form>
            {articles}
      </>
    )
}

export default Landing;