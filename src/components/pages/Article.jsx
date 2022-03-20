import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Article({article}) {
    // const [art, setArt] = useState({})
   const id = useParams()
   let artPull = id.id
   let articleData=article[artPull]
    console.log(article[artPull])
    return ( 
        <div>
            <h1>{articleData.title}</h1>
            <h3>{articleData.author}</h3>
            <p>{articleData.content}</p>
        </div>
     );
}

export default Article;