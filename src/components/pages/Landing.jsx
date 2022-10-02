import React from "react";
import { Link } from 'react-router-dom'

function Landing(props) {

    const articleComponents = props.articles.map((article, i) => {
        if (article) {
            return (
                <div key={`article-${i}`}>
                    <Link to={`/display/${i}`}>
                        <h3>{article.title}</h3>
                    </Link>
                </div>
            )

        }
    })

    return (
        <div>
            <h1>Landing Page</h1>
            {articleComponents}
        </div>

    )
}

export default Landing;