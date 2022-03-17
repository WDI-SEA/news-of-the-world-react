import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'


function Landing({ articles }) {

    const allArticles = articles.map((article, idx) => {
        return (
            <li key={`article-${idx}`}><Link to={`/articles/${idx}`}>{article.title}</Link></li>
        )
    })
    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
                {allArticles}
            </ul>
        </div>
    )
}

export default Landing;