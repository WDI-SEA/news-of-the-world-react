import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Landing(props) {
    const [search, setSearch] = useState('')

    const articles = props.articles.map((article, i) => {
        return (
            <div key={`article${i}`}>
                <Link to={`/display/${i}`} >
                    <h3> {article.title}</h3>
                </Link>
                <button onClick={() => props.addFaves(article)}>Faves</button>
            </div>

        )
    })

    const faves = props.faves.map((fave, i) => {
        return (
            <div key={`faves${i}`}>
                <Link to={`/display/${i}`} >
                    <h3> {fave.title}</h3>
                </Link>
            </div>

        )
    })




    const searchAPI = props.articles.filter(news => {
        let searchedTerm = search.toLowerCase()
        let lowerCaseName = news.title.toLowerCase()
        return lowerCaseName.includes(searchedTerm)
    })


    const searchedItems = searchAPI.map((item, i) => {
        return (
            <div key={`item${i}`}>
                <Link to={`/display/${i}`} >
                    <h3> {item.title}</h3>
                </Link>
            </div>
        )
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
    }



    return (
        <>
            <h1>Landing Page</h1>
            <form>
                <label htmlFor='search'>Search</label>
                <input
                    type='text'
                    id='search'
                    value={search}
                    onChange={handleChange}
                />
            </form>
            {searchedItems}
            <h3>Faves</h3>
            {faves}
            <p>------------------------------------------------</p>
            <h3>HeadLines</h3>
            {articles}

        </>
    )
}

export default Landing;