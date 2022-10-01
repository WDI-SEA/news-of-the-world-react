import React from 'react';
import { Link } from 'react-router-dom'

function Landing(props){

    const results = props.results.map((article, idx) => {
        return (
            <div key={`article-${idx}`}>
                <Link to={`/details/${idx}`}><h4>{article.title}</h4></Link>
            </div>
        )
})

    return (
        <div class = "App">
            <form onSubmit={props.handleSubmit}>
                <input type="text" 
                    name="search" 
                    onChange={props.handleChange} 
                    value={props.search} />

                <button type ='submit'>Search</button>
            </form>
                {results}
        </div>
    )
}

export default Landing