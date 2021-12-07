import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router';

// function Display() {
//     useParams
//     return (
//         <h1>Display Page</h1>
//     )
// }

// export default Display;


function Display(props){
    let params = useParams()
    let content = props.articles ? props.articles[params.id] : "error!!!"
    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
            <a href={content.url}>Read More...</a>
            <br />
            <Link to="/" onClick={() => props.add(content)}>Save to Favorites</Link>
            <hr />
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Display