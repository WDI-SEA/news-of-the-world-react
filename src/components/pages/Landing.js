import React from "react";
import { Link, Redirect } from 'react-router-dom'

function Landing(props) {

    const displayArticles = props.articles.map((el, index) => {
        return <div><Link to={`/article/${index}`}>
            <li key={`article-${index}`} >
                {el.title}
            </li></Link>
            <Link to='/'><button onClick={() => props.handleClick(el)}>Add to fav</button></Link>
        </div>
    })

    const allFaves = props.faves.map((f, index) => {
        return (
            <li key={`article-${index}`}>
                <h3><Link to={`/article/${index}`}>{f.title}</Link></h3>
            </li>
        )
    })

    return (
        <div>
            <div>
                <h1>Landing Page</h1>
                <ul>
                    <li>
                        {displayArticles}
                    </li>
                </ul>
            </div>
            <div>
                <h1>Saved Faves:</h1>
                <ul>
                    <li>
                {allFaves}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Landing;