import React from 'react';
import { Link } from 'react-router-dom'

export const Landing = (props) => {

    const results = props.results.map((article, i) => {
        return (
            <div key={`key is ${i}`} className="linktopia">
                <Link to={`/details/${i}`}><p>{article.title}</p></Link>
            </div>
        )
})

    return (
        <div>
            <form className="searchContainer" onSubmit={props.handleSubmit}>
                <input type="text" name="search" className="searchBar" placeholder='SEARCH' onChange={props.handleChange} value={props.search} />
            </form>
                {results}
        </div>
    )
};