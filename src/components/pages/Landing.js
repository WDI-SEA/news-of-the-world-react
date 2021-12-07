import React from "react";
import { Link } from 'react-router-dom'

function Landing(props) {
    // console.log('Were on Landing')
    if(!(props.stories)){
        return <h1>Search something</h1>
    }
    let storiesList = props.stories.map((s,i) => {
        return (
            <li key={i}>
                <Link
                    to={`/article/${i}`}
                    onClick={() => props.storyClick(s)}
                >
                    <h5>{s.title}</h5>
                </Link>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {storiesList}
            </ul>
        </div>
    )
}

export default Landing;