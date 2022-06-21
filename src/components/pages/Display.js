import React from "react";
import {Link} from 'react-router-dom'
// ask about
//import { useParams } from 'react-router'

function Display(props) {
    // ask about
    //let params = useParams()
    let content = props.articles


    
    return (
        <>
        <h1>{content.title}</h1>
        <p>{content.content}</p>



        </>
    )
}

export default Display;
