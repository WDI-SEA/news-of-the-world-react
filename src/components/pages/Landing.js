import React from "react";
import { Link } from 'react-router-dom';

function Landing(props) {
    console.log('this is props\n', props)
    const articleList = props.articles.map((a, i) => {
        return (
            <li key={i}>
                <h3><Link to = {`/display/${i}`}>{a.title}</Link></h3>
                <small>Written by: {a.author}</small>
            </li>
        )
    })

    const allFaves = props.faves.map((f, i) => {
        return (
            <li key={i}>
                <h3>{f.title}</h3>
            </li>
        )
    })

    return (
        <div>
            <div>
                <label htmlFor='articleSearch'>Search for an article: </label>
                <input
                    id='articleSearch'
                    type='text'
                    value={props.search}
                    onChange={props.handleChange}
                />
            </div>
            <ul>
                {articleList}
            </ul>
            <div>
                <h1>Here are your saved articles: </h1>
                <ul>
                    {allFaves}
                </ul>
            </div>
        </div>
    )
}

export default Landing;