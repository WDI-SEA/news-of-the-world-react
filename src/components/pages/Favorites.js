import React from 'react';
import { Link } from 'react-router-dom';


function Favorites(props) {
    console.log('this is props.favs', props.favs)
    console.log('this is props', props)
    const favArticles = props.favs.map((a, i) => {


        return(
            <div>
                <li key={i}>
                <h2><Link to={`/display/${i}`}>{a.title}</Link></h2>
                <small>Written by: {a.author}</small>
                </li>
            </div>
        )
    })

    return(
        <div>
            <h1><Link to='/'>Home</Link></h1>
            <h1>Favorite articles</h1>
            {favArticles}
            
        </div>
    )
}

export default Favorites