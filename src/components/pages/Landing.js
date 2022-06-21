import React from "react";
import { Link } from 'react-router-dom'


function Landing(props) {
    const articles = props.results.map((article, i) => {
        return (
            <div key={`key ${i}`}>
                <Link to={`/details/${i}`}><p>{article.title}</p></Link>


            </div>
        )
    })





    return (
        <div>
        <h1>Landing Page</h1>

        <form onSubmit={props.handleSubmit}>
            <input type='text' name='search' onChange={props.handleChange} value={props.search} />
            {results}
        </form>
        </div>
    )
}

export default Landing;
