import React from "react";
import { Link } from "react-router-dom";
function Landing({ articles }) {
    const articleList = articles.map((article, id) => {
        return (
            <div
                key={`article-link${id}`}>
                <Link to={`/articles/${id}`}>
                    {article.title}
                </Link>
            </div>
        )
    })
    return (
        <div>

            <h1>Landing Page</h1>

            {articleList}
        </div>
    )
}

export default Landing;