import React from "react";
import { useParams } from 'react-router-dom'
// import Search from '../partials/Search'

function Display(props) {
    let { id } = useParams()
    return (
        <div>
            <h1>The News:</h1>
            
        </div>
    )
}

export default Display;