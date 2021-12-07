// import React from "react";
// import { Link, Redirect, useParams } from 'react-router-dom'


// const Display = props => {

//     const { id } = useParams();

//     return (
//         <div>
//             <h1>Display Page</h1>
//             <p>{props.articles[id].description}</p>
//         </div>
//     )
// }

// export default Display;

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Display(props) {
    let params = useParams()
    let content = props.articles ? props.articles[params.id] : 'error'

    return (
        <div>
            <h2 >{content.title}</h2>
            <p>{content.content}</p>
            <a href={content.url}>Read More Here!</a>
            <hr />
            <div>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default Display;