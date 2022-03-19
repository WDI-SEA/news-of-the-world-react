import React from "react";
import {useParams} from 'react-router-dom'


function Favorites({faves}) {
    return (
        <>
            <h1>Your Favorites</h1>
            {/* <h3>{faves.author}</h3> */}
        </>
    )
}

export default Favorites;