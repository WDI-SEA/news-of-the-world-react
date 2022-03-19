import React from "react";
import {useParams, Link} from 'react-router-dom'

function Display({news, setFaves, faves}) {

    const {id} = useParams()
    const newsTitle = news[id].title
    const newsDesc = news[id].description
    const newsImage = news[id].urlToImage
    // const newsTitle = news[id].title
    // const newsTitle = news[id].title



    return (
        <>
        <h1>{newsTitle}</h1>
        <img width={500} height={500} src={newsImage}/>
        <h4>{newsDesc}</h4>
        <button onClick={()=>setFaves([...faves, news[id]])}>Favorate ♥</button>
        <br></br>
        <Link to={'/'}>Return to Main</Link>
        </>
    )
}

export default Display;