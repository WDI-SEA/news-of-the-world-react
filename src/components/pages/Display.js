// import React from "react";

// function Display(props) {
//     // const allArticles = props.articles ? props.articles.articles.map((a, i) => {
//     //     return (
//     //         <li key={i}>
//     //             <h2>{a.title}</h2>
//     //             <small>Written by: {a.author}</small>
//     //             <p>{a.description}</p>
//     //             <img src={a.urlToimage} alt={a.title} />
//     //         </li>
//     //     )
//     // }) : []
//     return (
//         <div>
//             {/* <p>{allArticles}</p> */}
//             {props.click()}
//         </div>

//     )
// }

// export default Display;

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Display(props) {
    let params = useParams()
    let content = props.articles ? props.articles[params.id] : 'error'

    return (
        <div>
            <h2>{content.title}</h2>
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