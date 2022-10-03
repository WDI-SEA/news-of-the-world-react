import React from "react";
import { Link } from 'react-router-dom'

function Display(props) {

    const articleComponents = props.apiResponse.map((article, i) => {
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
            <h1>News</h1>
            {articleComponents}
        </div>

    )
}

export default Display;