import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import SearchPage from "./SearchPage";
import axios from "axios";

export default function Landing({ articles, setArticles }) {
    const [searchData, setSearchData] = useState('')

    const searchUrl = `https://newsapi.org/v2/everything?q=${searchData}&apiKey=ce55c74b200e4ac1925e7df8558f2d0d`

    const handleSearch = e => {
        e.preventDefault()
        axios.get(searchUrl)
        .then(response=> {
            setArticles(response.data.articles)
        })
    .catch(err=>console.log(err))
    }

        const articlesArr = articles.map((article, idx)=> {
            return(
                <div key={`Article index: ${idx}`}>
                    <li><Link to={`/articles/${idx}`}>{article.title}</Link></li>
                </div>
            )        
        })

    return (
        <>
        < SearchPage
            handleSearch={handleSearch}
            searchData={searchData}
            setSearchData={setSearchData}
        />
        <ul>{articlesArr}</ul>
        </>
    )
}